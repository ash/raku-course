// raku.js — drop the raku.online playground into any web page.
//
//   <script src="https://raku.online/raku.js"></script>
//
// Then any element that carries a `data-raku` attribute becomes a runnable Raku
// editor. Show code that turns editable-and-runnable:
//
//   <pre data-raku>say "Hello from an embedded editor!";</pre>
//
// …or an empty editor to type into:
//
//   <div data-raku data-run></div>
//
// Attributes (all optional):
//   data-run              run once as soon as the interpreter is ready
//   data-stdin="…"        preset standard input (and reveal the input box)
//   data-rows="N"         initial editor height in text rows (default: fit code)
//
// Multiple blocks per page share ONE WebAssembly interpreter (one download, one
// instance). Each editor lives in its own Shadow DOM, so the host page's CSS
// can't reach in and ours can't leak out — it looks the same on any site.
//
// The interpreter is Raku++ compiled to WebAssembly; nothing is sent anywhere,
// the program runs in the visitor's browser. See https://github.com/ash/raku.online
(function () {
  'use strict';

  // Where we were loaded from — every asset (worker, wasm) is fetched relative
  // to this, so the embed works from any host page.
  var script = document.currentScript
    || (function () { var s = document.getElementsByTagName('script'); return s[s.length - 1]; })();
  var BASE = new URL('.', script.src).href;         // e.g. https://raku.online/
  var VER = '?v=bb6a2f22';                            // cache tag, stamped by deploy.sh
  var SELECTOR = script.getAttribute('data-selector') || '[data-raku]';

  // ---- the shared interpreter worker -------------------------------------
  // Built from a Blob so it runs even when raku.js is served cross-origin
  // (a plain `new Worker('https://…')` is blocked; a Blob worker that
  // importScripts() the cross-origin engine is allowed). One worker serves
  // every block on the page; only one program runs at a time.
  function workerSource() {
    return [
      'var BASE=' + JSON.stringify(BASE) + ',V=' + JSON.stringify(VER) + ';',
      'importScripts(BASE+"rakujs.js"+V);',
      'var Module=null,inRun=false;',
      'function make(){return RakuJS({',
      '  locateFile:function(p){return BASE+p+V;},',
      '  print:function(t){if(inRun)postMessage({type:"out",text:t+"\\n",cls:""});else console.log(t);},',
      '  printErr:function(t){if(inRun)postMessage({type:"out",text:t+"\\n",cls:"err"});else console.warn(t);}',
      '}).then(function(m){Module=m;return m;});}',
      'var ready=make().then(function(m){postMessage({type:"ready",version:m.ccall("rakupp_version","string",[],[])});})',
      '  .catch(function(e){postMessage({type:"loaderror",message:String(e)});});',
      'onmessage=function(e){',
      '  if(e.data.type!=="run")return;',
      '  ready.then(function(){',
      '    if(!Module){postMessage({type:"loaderror",message:"not loaded"});return;}',
      '    postMessage({type:"start"});',
      '    var t0=performance.now(),rc;inRun=true;',
      '    try{rc=Module.ccall("rakupp_run","number",["string","string"],[e.data.src,e.data.stdin||""]);}',
      '    catch(err){Module=null;ready=make();inRun=false;',
      '      postMessage({type:"runerror",message:String(err),deep:(err instanceof RangeError)||/call stack/i.test(String(err))});return;}',
      '    inRun=false;',
      '    postMessage({type:"done",rc:rc,ms:Math.round(performance.now()-t0)});',
      '  });',
      '};'
    ].join('\n');
  }

  var worker = null, workerReady = false, current = null, queued = null;
  var RECURSION_MSG = 'Recursion too deep for the browser (a few hundred levels) — '
    + 'a WebAssembly stack limit, not a Raku one. Rewrite it iteratively, or run it natively.';

  function createWorker() {
    var url = URL.createObjectURL(new Blob([workerSource()], { type: 'application/javascript' }));
    worker = new Worker(url);
    workerReady = false;
    worker.onmessage = function (e) {
      var m = e.data, b = current;
      switch (m.type) {
        case 'ready': workerReady = true; if (queued) { var q = queued; queued = null; startRun(q); } break;
        case 'out': if (b) b.feed(m.text, m.cls); break;
        case 'done':
          if (b) { b.finish(m.rc, m.ms); }
          current = null; if (queued) { var n = queued; queued = null; startRun(n); }
          break;
        case 'runerror':
          if (b) { b.error(m.deep ? RECURSION_MSG : '[host error] ' + m.message); b.finish(1, 0); }
          current = null;
          // A crashed run left the module unknown; the worker already rebuilt it.
          if (queued) { var k = queued; queued = null; startRun(k); }
          break;
        case 'loaderror':
          if (b) { b.error('Could not load the interpreter — ' + m.message); b.finish(1, 0); }
          current = null;
          break;
      }
    };
    worker.onerror = function () {
      if (current) { current.error('[worker error]'); current.finish(1, 0); current = null; }
    };
  }
  function ensureWorker() { if (!worker) createWorker(); }
  function killWorker() {
    if (worker) { worker.terminate(); worker = null; workerReady = false; }
    current = null;
  }
  function startRun(block) {
    ensureWorker();
    current = block;
    block.starting();
    worker.postMessage({ type: 'run', src: block.getCode(), stdin: block.getStdin() });
  }
  // Public entry the blocks call. Serialize: if one is running, queue this one
  // (a newer request replaces an older queued one).
  function requestRun(block) {
    if (current === block) { stopRun(block); return; }   // clicking Run again = stop
    if (current) { queued = block; block.setStatus('queued…'); return; }
    startRun(block);
  }
  function stopRun(block) {
    if (current !== block && queued !== block) return;
    if (queued === block) { queued = null; block.reset(); return; }
    // The run lives in a synchronous ccall; the only way to stop it is to kill
    // the worker. A fresh one reloads lazily on the next run.
    killWorker();
    block.stopped();
  }

  // ---- one editor -------------------------------------------------------
  var STYLE = [
    ':host{all:initial;display:block;margin:1em 0;}',
    '*{box-sizing:border-box;}',
    // The palette (bg/panel/text AND the VS Code token colours) lives in CSS
    // variables so it switches as one unit — Light+ by default, Dark+ under
    // system dark OR a forced data-theme. Same scheme as course.raku.org.
    // --accent can be re-tinted from the embedding page: set --rk-embed-accent
    // on any ancestor and it inherits through the shadow boundary (custom
    // properties are not reset by :host{all:initial}). Defaults to magenta.
    '.wrap{--bg:#fbfbfc;--panel:#f1f2f4;--ink:#1b1d23;--muted:#5b616e;',
    '  --accent:var(--rk-embed-accent,#d33682);',
    '  --accent2:#268bd2;--border:#d7dae0;',
    '  --tk:#0000ff;--tnb:#267f99;--tv:#001080;--ts:#a31515;--tm:#098658;--tc:#008000;',
    '  --mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;',
    '  border:1px solid var(--border);border-radius:8px;overflow:hidden;',
    '  background:var(--bg);color:var(--ink);',
    '  font:14px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;}',
    // Dark+ when forced dark…
    '.wrap[data-theme="dark"]{--bg:#1f2127;--panel:#2b2e37;--ink:#e6e6e6;--muted:#9aa0ab;--border:#3a3f4b;',
    ' --tk:#569cd6;--tnb:#4ec9b0;--tv:#9cdcfe;--ts:#ce9178;--tm:#b5cea8;--tc:#6a9955;}',
    // …or when the OS is dark and nothing forces light.
    '@media (prefers-color-scheme:dark){.wrap:not([data-theme="light"]){',
    ' --bg:#1f2127;--panel:#2b2e37;--ink:#e6e6e6;--muted:#9aa0ab;--border:#3a3f4b;',
    ' --tk:#569cd6;--tnb:#4ec9b0;--tv:#9cdcfe;--ts:#ce9178;--tm:#b5cea8;--tc:#6a9955;}}',
    // Forced light must win even when the OS is dark (already light by default).
    '.wrap[data-theme="light"]{--bg:#fbfbfc;--panel:#f1f2f4;--ink:#1b1d23;--muted:#5b616e;--border:#d7dae0;',
    ' --tk:#0000ff;--tnb:#267f99;--tv:#001080;--ts:#a31515;--tm:#098658;--tc:#008000;}',
    '.bar{display:flex;align-items:center;gap:8px;padding:6px 8px;background:var(--panel);',
    '  border-bottom:1px solid var(--border);}',
    '.bar .sp{flex:1;}',
    '.bar .st{color:var(--muted);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
    'button{font:inherit;color:var(--ink);background:var(--bg);border:1px solid var(--border);',
    '  border-radius:6px;padding:4px 10px;cursor:pointer;}',
    'button:hover{border-color:var(--muted);}',
    'button.run{background:var(--accent);color:#fff;border-color:transparent;font-weight:600;min-width:74px;}',
    'button.run.on{background:var(--bg);color:var(--accent);border-color:var(--accent);}',
    'button.copy-code{font-size:11px;padding:2px 8px;color:var(--muted);}',
    'button.copy-code:hover{color:var(--ink);}',
    'button.open-ext{padding:3px 6px;color:var(--muted);display:inline-flex;align-items:center;}',
    'button.open-ext:hover{color:var(--accent2);}',
    'button.open-ext svg{display:block;}',
    '.ed{position:relative;}',
    'pre.hl,textarea{margin:0;padding:10px 12px;border:0;font-family:var(--mono);font-size:13px;',
    '  line-height:1.5;tab-size:4;white-space:pre;overflow:auto;}',
    'pre.hl{position:absolute;inset:0;pointer-events:none;overflow:hidden;color:var(--ink);}',
    'textarea{position:relative;display:block;width:100%;resize:vertical;outline:0;',
    '  background:transparent;color:transparent;caret-color:var(--ink);min-height:2.5em;}',
    'textarea::selection{background:rgba(120,140,170,.35);}',
    '.io{border-top:1px solid var(--border);}',
    '.io .lbl{padding:3px 12px;font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;',
    '  color:var(--muted);background:var(--panel);display:flex;align-items:center;}',
    '.io .lbl button{margin-left:auto;font-size:11px;padding:1px 8px;}',
    'textarea.in{color:var(--ink);min-height:2em;height:4em;}',
    'pre.out{margin:0;padding:10px 12px;font-family:var(--mono);font-size:12.5px;white-space:pre-wrap;',
    '  max-height:60vh;min-height:2.6em;overflow:auto;}',
    'pre.out .err{color:var(--accent);}',
    'pre.out .meta{color:var(--muted);}',
    // VS Code token colours, driven by the palette variables above so they
    // track the theme (system or forced) exactly like the background does.
    '.t-k{color:var(--tk);}.t-nb{color:var(--tnb);}.t-v{color:var(--tv);}',
    '.t-s{color:var(--ts);}.t-m{color:var(--tm);}.t-c{color:var(--tc);}',
    // Pygments token classes, as emitted by `rakupp --highlight` (the WASM
    // highlighter) — same palette, so the two highlighters look identical.
    '.k,.kd,.kn,.kp,.kr,.kt{color:var(--tk);}.nb,.bp{color:var(--tnb);}',
    '.nv,.vg,.vi,.vc{color:var(--tv);}',
    '.s,.s1,.s2,.sb,.sc,.sd,.sh,.si,.sr,.ss,.sx,.se,.dl{color:var(--ts);}',
    '.mi,.mf,.mh,.mo,.mb,.il,.m{color:var(--tm);}',
    '.c,.c1,.cm,.cp,.cs,.cpf{color:var(--tc);}'
  ].join('');

  var esc = function (s) { return s.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); };

  // Lightweight Raku tokenizer (same scheme as the full playground): instant,
  // approximate, good enough to give the editor structure.
  var KW = new Set(('my our has state sub method submethod multi proto if elsif else unless with without while until '
    + 'for loop given when default repeat return make take gather do class role grammar token rule regex enum subset '
    + 'use need require does but is start react whenever supply emit last next redo try and or not so andthen orelse '
    + 'BEGIN END self').split(' '));
  var NB = new Set(('Int UInt Str Num Rat Bool Array Hash List Seq Map Bag Set Pair Range Any Mu Cool Nil Whatever '
    + 'say print put note printf sprintf warn die map grep sort reverse join split first sum min max elems keys values '
    + 'pairs push pop shift unshift chars uc lc tc trim lines words comb get prompt slurp True False Inf NaN pi tau e now').split(' '));
  // A name right after one of these is a DECLARATION, not a keyword/builtin —
  // `method push { … }` names a method `push`; it must not paint like `.push`.
  var DECL = new Set('sub method submethod multi proto token rule regex'.split(' '));
  var RE = new RegExp([
    /(#[^\n]*)/.source,
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/.source,
    /(\b0[xob][0-9a-fA-F_]+|\b\d[\d_]*(?:\.\d[\d_]*)?(?:[eE][+-]?\d+)?)/.source,
    /([$@%&][.!^*?=:~<]?(?:[A-Za-z_][\w'-]*|\d+|[/!_]))/.source,
    /([A-Za-z_][\w'-]*)/.source
  ].join('|'), 'g');
  function highlight(code) {
    var out = '', last = 0, m, afterDecl = false; RE.lastIndex = 0;
    while ((m = RE.exec(code))) {
      var gap = code.slice(last, m.index);
      out += esc(gap);
      var t = m[0], isWord = m[5] !== undefined;
      var cls = m[1] !== undefined ? 'c' : m[2] !== undefined ? 's' : m[3] !== undefined ? 'm'
        : m[4] !== undefined ? 'v'
        : (afterDecl && isWord && /^\s*$/.test(gap)) ? '' // the declared routine/rule name
        : KW.has(t) ? 'k' : NB.has(t) ? 'nb' : '';
      out += cls ? '<span class="t-' + cls + '">' + esc(t) + '</span>' : esc(t);
      afterDecl = isWord && DECL.has(t);
      last = m.index + t.length;
    }
    return out + esc(code.slice(last));
  }

  // rakupp's OWN highlighter (the WASM build, same tokenizer as `rakupp
  // --highlight`), loaded lazily on the main thread. Until it's ready, editors
  // paint with the fast JS approximation above; once it loads, every editor
  // repaints through rakupp for exact fidelity — and edits stay exact too.
  var rakuHL = null;          // function(src) -> inner highlighted HTML, or null
  var rakuHLTried = false;
  var HL_REPAINT = [];        // per-editor paint() callbacks, upgraded on load
  function loadHighlighter() {
    if (rakuHLTried) return; rakuHLTried = true;
    if (!window.RakuJS && !document.querySelector('script[data-rakujs]')) {
      var s = document.createElement('script');
      s.src = BASE + 'rakujs.js' + VER; s.setAttribute('data-rakujs', '');
      s.onload = initHighlighter; s.onerror = function () {};
      document.head.appendChild(s);
    } else initHighlighter();
  }
  function initHighlighter() {
    if (!window.RakuJS) return;
    window.RakuJS({ locateFile: function (p) { return BASE + p + VER; },
                   print: function () {}, printErr: function () {} })
      .then(function (m) {
        var fn = m.cwrap('rakupp_highlight', 'string', ['string']);
        rakuHL = function (src) {
          var html = fn(src), i = html.indexOf('<pre'), j = html.lastIndexOf('</pre>');
          if (i < 0 || j < 0) return null;
          return html.slice(html.indexOf('>', i) + 1, j); // the inner spans only
        };
        HL_REPAINT.forEach(function (f) { try { f(); } catch (e) {} });
      })
      .catch(function () {});
  }

  // Does the program read standard input? Then reveal the input box up front.
  function readsStdin(code) { return /\$\*IN\b|(?:^|[^.\w])(?:get|prompt|lines)\b/.test(code); }

  // Compress text the way the playground's #code= links do (deflate-raw,
  // base64url) so the ↗ button can hand the current program to raku.online.
  function b64uEnc(bytes) {
    var s = '';
    for (var i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function encodeShare(text) {
    var stream = new Blob([new TextEncoder().encode(text)]).stream().pipeThrough(new CompressionStream('deflate-raw'));
    return new Response(stream).arrayBuffer().then(function (buf) { return b64uEnc(new Uint8Array(buf)); });
  }

  var ANSI = /\x1b\[[0-9;?]*[A-Za-z]/g;

  function Block(srcEl, opts) {
    var code = opts.code != null ? opts.code : srcEl.textContent.replace(/^\n/, '').replace(/\s+$/, '');
    // Highlighting baked at build time by `rakupp --highlight` (Pygments-class
    // spans): keep it for the untouched display, so a page that only SHOWS code
    // needs no JS/WASM to be correctly coloured. Edits fall through to the live
    // highlighter below. The trims mirror `code` so the overlay stays aligned.
    var bakedEl = (srcEl.querySelector && srcEl.querySelector('pre')) || srcEl; // the <pre>, not its <div> wrapper
    // Only keep spans from rakupp/Pygments (short token classes). Pandoc's
    // `sourceCode` blocks use a different class scheme our CSS doesn't map, so
    // let those fall through and be re-highlighted live instead.
    var baked = (opts.code == null && /<span class="[a-z][a-z0-9]?[a-z0-9]?"/.test(bakedEl.innerHTML)
                 && !/sourceCode/.test(bakedEl.innerHTML))
              ? bakedEl.innerHTML.replace(/^\n/, '').replace(/\s+$/, '') : null;
    var host = document.createElement('div');
    host.className = 'rakupp-embed';
    if (srcEl.parentNode) srcEl.parentNode.replaceChild(host, srcEl);
    else document.body.appendChild(host);
    var root = host.attachShadow({ mode: 'open' });
    var st = document.createElement('style'); st.textContent = STYLE; root.appendChild(st);

    var wrap = document.createElement('div'); wrap.className = 'wrap'; root.appendChild(wrap);
    if (opts.theme === 'light' || opts.theme === 'dark') {
      wrap.setAttribute('data-theme', opts.theme);
    } else {
      // No forced theme: follow the host page's active theme, now and on change.
      var ht0 = hostTheme();
      if (ht0) wrap.setAttribute('data-theme', ht0);
      FOLLOWERS.push(wrap);
    }
    wrap.innerHTML =
      '<div class="bar"><button class="run">▶ Run</button><span class="sp"></span>'
      + '<span class="st"></span><button class="copy-code" title="Copy the code">Copy</button>'
      + '<button class="open-ext" title="Open in the raku.online playground" aria-label="Open in the raku.online playground">'
      + '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" '
      + 'stroke-linecap="round" stroke-linejoin="round"><path d="M14 3h7v7"/><path d="M10 14 21 3"/>'
      + '<path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg></button></div>'
      + '<div class="ed"><pre class="hl"></pre><textarea spellcheck="false" autocomplete="off" '
      + 'autocapitalize="off" wrap="off"></textarea></div>'
      + '<div class="io in-wrap" hidden><div class="lbl">Standard input</div>'
      + '<textarea class="in" spellcheck="false" autocomplete="off" wrap="off"></textarea></div>'
      + '<div class="io out-wrap" hidden><div class="lbl">Output<button class="copy">Copy</button></div>'
      + '<pre class="out"></pre></div>';

    var runBtn = wrap.querySelector('.run');
    var stEl = wrap.querySelector('.st');
    var ta = wrap.querySelector('textarea:not(.in)');
    var hl = wrap.querySelector('.hl');
    var inWrap = wrap.querySelector('.in-wrap');
    var inTa = wrap.querySelector('.in');
    var outWrap = wrap.querySelector('.out-wrap');
    var outEl = wrap.querySelector('.out');
    var copyBtn = wrap.querySelector('.copy');
    var copyCodeBtn = wrap.querySelector('.copy-code');
    var openExtBtn = wrap.querySelector('.open-ext');

    var self = this;
    ta.value = code;
    if (opts.rows) ta.style.height = (opts.rows * 1.5 + 1.3) + 'em';
    else { var n = Math.max(1, code.split('\n').length); ta.style.height = (n * 1.5 + 1.3) + 'em'; }
    function paint() {
      var src = ta.value, html;
      if (baked != null && src === code) html = baked;                  // pristine → the build-baked spans
      else if (rakuHL && src.length < 20000) html = rakuHL(src);        // edited → rakupp WASM (once loaded)
      else html = highlight(src);                                       // …else the JS approximation
      hl.innerHTML = html;
      hl.scrollTop = ta.scrollTop; hl.scrollLeft = ta.scrollLeft;
    }
    paint();
    HL_REPAINT.push(paint);        // upgrade this editor once rakupp's highlighter loads
    // Load rakupp's WASM highlighter lazily — only when the user actually edits,
    // so a page that merely DISPLAYS pre-rendered code fetches no WASM at all.
    ta.addEventListener('input', function () { loadHighlighter(); paint(); });
    ta.addEventListener('scroll', function () { hl.scrollTop = ta.scrollTop; hl.scrollLeft = ta.scrollLeft; });
    // Tab inserts spaces; Ctrl/Cmd-Enter runs.
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') { e.preventDefault(); document.execCommand('insertText', false, '    '); }
      else if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { e.preventDefault(); requestRun(self); }
    });

    if (opts.stdin != null) { inTa.value = opts.stdin; inWrap.hidden = false; }
    else if (readsStdin(code)) inWrap.hidden = false;

    // Copy `text` to the clipboard and briefly flash the button that was clicked.
    function copyTo(btn, text) {
      function flash() { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy'; }, 1200); }
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(flash, flash); else flash();
    }
    runBtn.addEventListener('click', function () { requestRun(self); });
    copyCodeBtn.addEventListener('click', function () { copyTo(copyCodeBtn, ta.value); });
    // Open the current program in the full raku.online playground, in a new tab.
    // The tab is opened synchronously (so pop-up blockers allow it) and its URL
    // filled in once the code is compressed into a #code= link.
    openExtBtn.addEventListener('click', function () {
      var w = window.open('about:blank', '_blank');
      var stdinText = inWrap.hidden ? '' : inTa.value;
      if (!window.CompressionStream) { if (w) w.location = BASE; return; }
      Promise.all([encodeShare(ta.value), stdinText ? encodeShare(stdinText) : Promise.resolve('')])
        .then(function (r) {
          var url = BASE + '#code=' + r[0] + (r[1] ? '&stdin=' + r[1] : '');
          if (w) w.location = url; else window.open(url, '_blank');
        })
        .catch(function () { if (w) w.location = BASE; });
    });
    copyBtn.addEventListener('click', function () {
      copyTo(copyBtn, (self._screen || []).filter(function (p) { return p[1] !== 'meta'; })
        .map(function (p) { return p[0]; }).join(''));
    });

    // ---- output screen (coalesced render, minimal ANSI screen-clear) ----
    this._screen = []; this._clearNext = false; var chars = 0, pending = false, CAP = 200000;
    function render() { pending = false; outEl.innerHTML = self._screen.map(function (p) { return '<span class="' + p[1] + '">' + esc(p[0]) + '</span>'; }).join(''); outEl.scrollTop = outEl.scrollHeight; }
    function sched() { if (!pending) { pending = true; setTimeout(render, 16); } }
    function clear() { self._screen = []; chars = 0; self._clearNext = false; sched(); }
    function push(text, cls) {
      // Deferred clear: keep the previous run's output on screen until the new run
      // actually produces something, so re-running never collapses the block.
      if (self._clearNext) { self._screen = []; chars = 0; self._clearNext = false; sched(); }
      if (!text || chars > CAP) return;
      chars += text.length; self._screen.push([text, cls || '']); sched();
    }
    this.feed = function (text, cls) {
      ANSI.lastIndex = 0; var lastI = 0, mm;
      while ((mm = ANSI.exec(text))) {
        push(text.slice(lastI, mm.index), cls);
        var f = mm[0][mm[0].length - 1];
        if (mm[0] === '\x1b[2J' || f === 'H' || f === 'f') clear();
        lastI = ANSI.lastIndex;
      }
      push(text.slice(lastI), cls);
    };
    this.error = function (msg) { push('\n' + msg + '\n', 'err'); };

    // ---- run lifecycle hooks the manager calls ----
    var running = false;
    function setRun(on) { running = on; runBtn.classList.toggle('on', on); runBtn.textContent = on ? '■ Stop' : '▶ Run'; }
    this.getCode = function () { return ta.value; };
    this.getStdin = function () { return inWrap.hidden ? '' : inTa.value; };
    this.setStatus = function (s) { stEl.textContent = s; };
    this.starting = function () {
      // First reveal only: smoothly grow the output pane from 0 to its natural
      // height (measured), then release the inline height so output can stream in.
      // On a re-run the pane is already open — the deferred clear keeps it from
      // collapsing, so nothing jumps.
      if (outWrap.hidden) {
        outWrap.hidden = false;
        var target = outWrap.scrollHeight;
        outWrap.style.height = '0px'; outWrap.style.overflow = 'hidden';
        void outWrap.offsetHeight;                       // force reflow
        outWrap.style.transition = 'height .2s ease';
        outWrap.style.height = target + 'px';
        setTimeout(function () {
          outWrap.style.height = ''; outWrap.style.overflow = ''; outWrap.style.transition = '';
        }, 230);
      }
      self._clearNext = true; setRun(true); stEl.textContent = 'running…';
    };
    this.finish = function (rc, ms) { setRun(false); if (self._clearNext) { self._screen = []; chars = 0; self._clearNext = false; } if (!self._screen.length) push('(no output)', 'meta'); push('\n— exit ' + rc + ' · ' + ms + ' ms —', 'meta'); stEl.textContent = 'exit ' + rc + ' · ' + ms + ' ms'; };
    this.stopped = function () { setRun(false); if (self._clearNext) { self._screen = []; chars = 0; self._clearNext = false; } push('\n— stopped —', 'meta'); stEl.textContent = 'stopped'; };
    this.reset = function () { setRun(false); stEl.textContent = ''; };
  }

  // ---- boot -------------------------------------------------------------
  // A page-wide theme default from the script tag: <script … data-theme="dark">.
  var DEFAULT_THEME = script.getAttribute('data-theme') || '';

  // Follow the host page's active theme when a block doesn't force its own. A host
  // that themes itself can expose the resolved theme as
  // <html data-theme-active="dark|light">; editors then track it, live.
  var FOLLOWERS = [];
  function hostTheme() {
    var t = document.documentElement.getAttribute('data-theme-active');
    return (t === 'dark' || t === 'light') ? t : '';
  }
  function syncFollowers() {
    var ht = hostTheme();
    FOLLOWERS.forEach(function (w) {
      if (ht) w.setAttribute('data-theme', ht); else w.removeAttribute('data-theme');
    });
  }
  try {
    new MutationObserver(syncFollowers).observe(
      document.documentElement, { attributes: true, attributeFilter: ['data-theme-active'] });
  } catch (e) {}

  function enhance(el, extra) {
    if (el.__rakupp) return; el.__rakupp = true;
    var opts = extra || {};
    if (el.hasAttribute && el.hasAttribute('data-stdin')) opts.stdin = el.getAttribute('data-stdin');
    if (el.hasAttribute && el.hasAttribute('data-rows')) opts.rows = parseInt(el.getAttribute('data-rows'), 10) || 0;
    if (opts.theme == null) opts.theme = (el.getAttribute && el.getAttribute('data-theme')) || DEFAULT_THEME;
    var autorun = opts.run || (el.hasAttribute && el.hasAttribute('data-run'));
    var block = new Block(el, opts);
    if (autorun) requestRun(block);
    return block;
  }

  // Add `data-auto` to the script tag to also turn existing Raku code blocks
  // into runnable editors — the standard markdown / Prism / highlight.js shape
  // `<pre><code class="language-raku">…` — so authors change nothing but add the
  // script once. `data-auto="LANG"` overrides the recognised language classes.
  var AUTO = script.hasAttribute('data-auto');
  var AUTO_LANGS = (script.getAttribute('data-auto') || 'raku perl6 raku6').split(/[\s,]+/).filter(Boolean);
  // Match `language-raku` (markdown/Prism/highlight.js) OR a bare `raku` class —
  // the latter is what WordPress's core Code block emits when you add "raku" (or
  // "language-raku") in its Advanced → Additional CSS class(es) field.
  var AUTO_RE = new RegExp('\\b(?:language-)?(?:' + AUTO_LANGS.join('|') + ')\\b');
  function autoTargets(root) {
    var out = [], seen = [];
    function add(pre) { if (pre && seen.indexOf(pre) < 0) { seen.push(pre); out.push(pre); } }
    var r = root || document;
    // The class can sit on the inner <code> (highlighters) or on the <pre>
    // itself (WordPress Code block, plain markup).
    r.querySelectorAll('pre > code[class]').forEach(function (code) {
      if (AUTO_RE.test(code.className)) add(code.parentNode);
    });
    r.querySelectorAll('pre[class]').forEach(function (pre) {
      if (AUTO_RE.test(pre.className)) add(pre);
    });
    return out;
  }

  function enhanceAll(root) {
    (root || document).querySelectorAll(SELECTOR).forEach(function (el) { enhance(el); });
    if (AUTO) autoTargets(root).forEach(function (el) { enhance(el); });
  }

  // Programmatic API for pages that build editors dynamically.
  window.RakuEmbed = { enhance: enhance, enhanceAll: enhanceAll };

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', function () { enhanceAll(); });
  else enhanceAll();
})();
