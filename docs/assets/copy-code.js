/* Copy-to-clipboard and open-in-the-playground buttons for Raku code examples.
   Attaches only to `div.highlight.raku` blocks (marked by the page generator),
   so program output (```console) and data (```json) blocks get no button.
   A block with a Run button (`.runnable`) gets them too, but the raku.online
   editor that replaces it brings its own — these are only the fallback for
   when raku.js does not load. */
(function () {
  'use strict';

  // The playground the open button takes a block to — the shared raku.online
  // one, where the Run editor's own ↗ button leads too.
  var PLAYGROUND = 'https://raku.online/play/';

  var PLAY_SVG =
    '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="none" ' +
    'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M14 3h7v7"/><path d="M10 14 21 3"/>' +
    '<path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>';

  var COPY_SVG =
    '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">' +
    '<path fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" ' +
    'd="M5.5 5.5V3.2c0-.4.3-.7.7-.7h6.6c.4 0 .7.3.7.7v6.6c0 .4-.3.7-.7.7h-2.3"/>' +
    '<rect x="2.5" y="5.5" width="8" height="8" rx="0.7" fill="none" ' +
    'stroke="currentColor" stroke-width="1.4"/></svg>';

  var CHECK_SVG =
    '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">' +
    '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" ' +
    'stroke-linejoin="round" d="M3.5 8.5l3 3 6-6.5"/></svg>';

  function codeOf(pre) {
    // textContent gives the raw source without the syntax-highlight markup;
    // trim only the single trailing newline pygments/pre tends to add.
    return pre.textContent.replace(/\n$/, '');
  }

  function flash(btn) {
    btn.classList.add('copied');
    btn.innerHTML = CHECK_SVG;
    btn.title = 'Copied!';
    window.clearTimeout(btn._t);
    btn._t = window.setTimeout(function () {
      btn.classList.remove('copied');
      btn.innerHTML = COPY_SVG;
      btn.title = 'Copy';
    }, 1500);
  }

  function fallbackCopy(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '0';
    ta.style.left = '0';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); flash(btn); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  function copy(text, btn) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { flash(btn); },
        function () { fallbackCopy(text, btn); }
      );
    } else {
      fallbackCopy(text, btn);
    }
  }

  // A playground link that carries the program: #code= with the source
  // deflate-raw compressed and base64url encoded — the form the playground's
  // Share button makes. Without CompressionStream, the plain playground.
  function playLink(code) {
    try {
      var stream = new Blob([new TextEncoder().encode(code)]).stream()
        .pipeThrough(new CompressionStream('deflate-raw'));
      return new Response(stream).arrayBuffer().then(function (buf) {
        var bytes = new Uint8Array(buf), s = '';
        for (var i = 0; i < bytes.length; i += 0x8000) {
          s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
        }
        return PLAYGROUND + '#code=' +
          btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      });
    } catch (e) {
      return Promise.resolve(PLAYGROUND);
    }
  }

  function addButtons() {
    var blocks = document.querySelectorAll('div.highlight.raku:not(.no-run)');
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      if (block.querySelector(':scope > .copy-btn')) continue;
      var pre = block.querySelector('pre');
      if (!pre) continue;

      var play = document.createElement('a');
      play.className = 'play-btn';
      play.href = PLAYGROUND;
      play.target = '_blank';
      play.rel = 'noopener';
      play.title = 'Open in the raku.online playground';
      play.setAttribute('aria-label', 'Open the code in the raku.online playground');
      play.innerHTML = PLAY_SVG;

      (function (play) {
        playLink(codeOf(pre)).then(function (url) { play.href = url; }, function () {});
      })(play);

      block.appendChild(play);

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn';
      btn.title = 'Copy';
      btn.setAttribute('aria-label', 'Copy code to clipboard');
      btn.innerHTML = COPY_SVG;

      (function (pre, btn) {
        btn.addEventListener('click', function () { copy(codeOf(pre), btn); });
      })(pre, btn);

      block.appendChild(btn);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addButtons);
  } else {
    addButtons();
  }
})();
