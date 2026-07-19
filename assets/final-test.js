/* The Final Test — a self-contained, static, 100-question quiz over Parts 1–5.
 *
 * No server. Questions come from window.FINAL_TEST_QUESTIONS (final-test-questions.js).
 * The user answers one item at a time, gets immediate right/wrong feedback with an
 * explanation, cannot change a checked answer, and can only move forward. At the end
 * they see their score, an optional shake easter egg at 67, and a shareable link that
 * encodes the per-question results behind a checksum (so a better score is not trivial
 * to forge) and reopens in a read-only review mode.
 */
(function () {
  'use strict';

  function shuffled(n) {
    var a = []; for (var i = 0; i < n; i++) a.push(i);
    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var Q = (window.FINAL_TEST_QUESTIONS || []).map(function (q) {
    var c = {}; for (var k in q) c[k] = q[k];
    // Normalise a boolean into a two-option choice so the rest of the engine
    // only ever deals with option indices. True/False keep their usual order.
    if (c.type === 'boolean') {
      c.type = 'choice'; c.options = ['True', 'False']; c.answer = q.answer ? 0 : 1;
      c._order = [0, 1];
      return c;
    }
    // Give choice/multi a shuffled *display* order (options and answer stay as
    // authored). Rendering follows `_order` but each option keeps its original
    // index, so the correct answer's on-screen position carries no pattern and
    // cannot be shared as "it's option B".
    if ((c.type === 'choice' || c.type === 'multi') && c.options) {
      c._order = shuffled(c.options.length);
    }
    return c;
  });
  var VERSION = 1;                 // bump if the question set changes meaningfully
  var SALT = 'raku-final-test-v1'; // deters casual link forgery (not real security)
  var root = document.getElementById('final-test');
  if (!root) return;

  // ---- small helpers -------------------------------------------------------

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  // Inline `code` spans in prompts/explanations; everything else is escaped text.
  function fmt(s) {
    return esc(s).replace(/`([^`]+)`/g, function (_, c) { return '<code>' + c + '</code>'; });
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function norm(s) {
    return String(s).trim().replace(/\s+/g, ' ').toLowerCase();
  }

  // 53-bit string hash (cyrb53) — used only for the link checksum.
  function cyrb53(str, seed) {
    var h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (var i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }

  // base64url for a Uint8Array
  function b64uEnc(bytes) {
    var s = '';
    for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function b64uDec(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) str += '=';
    var bin = atob(str), out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  var N = Q.length;
  var BITMAP_BYTES = Math.ceil(N / 8);

  function checksumBytes(payload) {
    // 4-byte checksum over the payload + SALT
    var s = '';
    for (var i = 0; i < payload.length; i++) s += String.fromCharCode(payload[i]);
    var h = cyrb53(s + SALT, 0x9e3779b1) >>> 0;
    return [(h >>> 24) & 255, (h >>> 16) & 255, (h >>> 8) & 255, h & 255];
  }

  function encodeResult(correctFlags) {
    var bitmap = new Uint8Array(BITMAP_BYTES);
    for (var i = 0; i < N; i++) if (correctFlags[i]) bitmap[i >> 3] |= (1 << (i & 7));
    var payload = new Uint8Array(1 + BITMAP_BYTES);
    payload[0] = VERSION;
    payload.set(bitmap, 1);
    var chk = checksumBytes(payload);
    var full = new Uint8Array(payload.length + 4);
    full.set(payload, 0);
    full.set(chk, payload.length);
    return b64uEnc(full);
  }

  function decodeResult(str) {
    try {
      var bytes = b64uDec(str);
      if (bytes.length !== 1 + BITMAP_BYTES + 4) return null;
      if (bytes[0] !== VERSION) return null;
      var payload = bytes.slice(0, 1 + BITMAP_BYTES);
      var chk = checksumBytes(payload);
      for (var i = 0; i < 4; i++) if (bytes[1 + BITMAP_BYTES + i] !== chk[i]) return null;
      var flags = [];
      for (var j = 0; j < N; j++) flags.push((bytes[1 + (j >> 3)] >> (j & 7)) & 1 ? true : false);
      return flags;
    } catch (e) { return null; }
  }

  // ---- state ---------------------------------------------------------------

  var state = {
    i: 0,                              // current question index
    answers: Q.map(function () { return { done: false, correct: false, chosen: null }; }),
    finished: false
  };

  // ---- answer checking per type -------------------------------------------

  function isCorrect(q, chosen) {
    if (q.type === 'input') {
      var accepts = Array.isArray(q.answer) ? q.answer : [q.answer];
      return accepts.some(function (a) { return norm(a) === norm(chosen == null ? '' : chosen); });
    }
    if (q.type === 'multi') {
      if (!Array.isArray(chosen)) return false;
      var want = q.answer.slice().sort().join(',');
      var got = chosen.slice().sort().join(',');
      return want === got;
    }
    // choice / boolean
    return chosen === q.answer;
  }

  // ---- rendering -----------------------------------------------------------

  function progressHtml() {
    var pct = Math.round((state.i) / N * 100);
    return '<div class="ft-progress"><div class="ft-bar"><span style="width:' + pct + '%"></span></div>' +
      '<div class="ft-count">Question ' + (state.i + 1) + ' of ' + N + '</div></div>';
  }

  function optionsHtml(q) {
    if (q.type === 'input') {
      return '<div class="ft-input-wrap"><input type="text" class="ft-input" autocomplete="off" ' +
        'autocapitalize="off" spellcheck="false" placeholder="Type your answer…"></div>';
    }
    var input = q.type === 'multi' ? 'checkbox' : 'radio';
    // Render in the shuffled display order; each option keeps its ORIGINAL index
    // in data-k, so scoring and reveal work against the authored answer unchanged.
    var order = q._order || q.options.map(function (_, i) { return i; });
    var html = '<ul class="ft-options">';
    order.forEach(function (oi) {
      html += '<li class="ft-opt" data-k="' + oi + '"><label>' +
        '<input type="' + input + '" name="ft-opt"> <span class="ft-opt-text">' + fmt(q.options[oi]) + '</span>' +
        '</label></li>';
    });
    return html + '</ul>';
  }

  function renderQuestion() {
    var q = Q[state.i];
    root.innerHTML = '';
    root.appendChild(el('div', null, progressHtml()));

    var card = el('div', 'ft-card');
    card.appendChild(el('div', 'ft-meta', 'Part ' + q.part + (q.topic ? ' · ' + esc(q.topic) : '')));
    card.appendChild(el('div', 'ft-q', fmt(q.q)));
    if (q.code) card.appendChild(el('pre', 'ft-code', '<code>' + esc(q.code) + '</code>'));
    card.appendChild(el('div', 'ft-answer-area', optionsHtml(q)));
    var fb = el('div', 'ft-feedback');
    fb.style.display = 'none';
    card.appendChild(fb);

    var actions = el('div', 'ft-actions');
    var checkBtn = el('button', 'ft-btn ft-btn-primary', 'Check answer');
    actions.appendChild(checkBtn);
    card.appendChild(actions);
    root.appendChild(card);

    // interaction
    var chosen = q.type === 'multi' ? [] : null;

    if (q.type !== 'input') {
      card.querySelectorAll('.ft-opt').forEach(function (li) {
        li.addEventListener('click', function (e) {
          if (state.answers[state.i].done) return;
          var k = +li.getAttribute('data-k');
          if (q.type === 'multi') {
            var pos = chosen.indexOf(k);
            if (pos >= 0) { chosen.splice(pos, 1); li.classList.remove('sel'); }
            else { chosen.push(k); li.classList.add('sel'); }
            li.querySelector('input').checked = chosen.indexOf(k) >= 0;
          } else {
            chosen = k;
            card.querySelectorAll('.ft-opt').forEach(function (o) { o.classList.remove('sel'); o.querySelector('input').checked = false; });
            li.classList.add('sel');
            li.querySelector('input').checked = true;
          }
          if (e.target.tagName !== 'INPUT') e.preventDefault();
        });
      });
    }

    function doCheck() {
      var a = state.answers[state.i];
      if (a.done) return;
      if (q.type === 'input') chosen = card.querySelector('.ft-input').value;
      // require an answer
      var empty = (q.type === 'input') ? (String(chosen).trim() === '')
        : (q.type === 'multi') ? (chosen.length === 0) : (chosen === null);
      if (empty) { card.querySelector('.ft-answer-area').classList.add('ft-nudge');
        setTimeout(function () { card.querySelector('.ft-answer-area').classList.remove('ft-nudge'); }, 400); return; }

      var ok = isCorrect(q, chosen);
      a.done = true; a.correct = ok; a.chosen = chosen;
      revealAnswer(card, q, chosen, ok);

      // lock
      if (q.type === 'input') card.querySelector('.ft-input').disabled = true;

      fb.style.display = '';
      fb.className = 'ft-feedback ' + (ok ? 'ok' : 'bad');
      fb.innerHTML = '<strong>' + (ok ? '✓ Correct' : '✗ Not quite') + '</strong>' +
        (q.explain ? '<div class="ft-explain">' + fmt(q.explain) + '</div>' : '');

      actions.innerHTML = '';
      var last = state.i === N - 1;
      var nextBtn = el('button', 'ft-btn ft-btn-primary', last ? 'See your result →' : 'Next question →');
      nextBtn.addEventListener('click', function () {
        if (last) { finish(); } else { state.i++; renderQuestion(); window.scrollTo(0, 0); }
      });
      actions.appendChild(nextBtn);
      nextBtn.focus();
    }

    checkBtn.addEventListener('click', doCheck);
    // Enter submits the current step
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault();
        var b = actions.querySelector('button'); if (b) b.click(); }
    });
    var inp = card.querySelector('.ft-input');
    if (inp) inp.focus();
  }

  // Highlight correct/incorrect options after a check.
  function revealAnswer(card, q, chosen, ok) {
    if (q.type === 'input') {
      var wrap = card.querySelector('.ft-input-wrap');
      wrap.classList.add(ok ? 'ok' : 'bad');
      if (!ok) {
        var want = Array.isArray(q.answer) ? q.answer[0] : q.answer;
        wrap.appendChild(el('div', 'ft-correct-note', 'Answer: <code>' + esc(want) + '</code>'));
      }
      return;
    }
    var correctSet = q.type === 'multi' ? q.answer : [q.answer];
    card.querySelectorAll('.ft-opt').forEach(function (li) {
      var k = +li.getAttribute('data-k');
      var isRight = correctSet.indexOf(k) >= 0;
      var picked = q.type === 'multi' ? chosen.indexOf(k) >= 0 : chosen === k;
      if (isRight) li.classList.add('correct');
      if (picked && !isRight) li.classList.add('wrong');
      li.classList.add('locked');
    });
  }

  // ---- finish + result -----------------------------------------------------

  function score() { return state.answers.reduce(function (n, a) { return n + (a.correct ? 1 : 0); }, 0); }

  // The shareable-link box (input + copy button), with the copy handler wired.
  function shareBox(link) {
    var share = el('div', 'ft-share');
    share.innerHTML = '<label>Your shareable result link</label>' +
      '<div class="ft-share-row"><input type="text" readonly class="ft-link" value="' + esc(link) + '">' +
      '<button class="ft-btn ft-copy">Copy</button></div>' +
      '<p class="ft-share-note">The link carries your per-question results behind a checksum, and reopens in review mode.</p>';
    share.querySelector('.ft-copy').addEventListener('click', function () {
      var inp = share.querySelector('.ft-link');
      inp.select();
      try { navigator.clipboard.writeText(inp.value); } catch (e) { document.execCommand('copy'); }
      this.textContent = 'Copied!';
      var b = this; setTimeout(function () { b.textContent = 'Copy'; }, 1500);
    });
    return share;
  }

  function finish() {
    state.finished = true;
    var s = score();
    var flags = state.answers.map(function (a) { return a.correct; });
    var hash = encodeResult(flags);
    var base = location.origin + location.pathname;
    var link = base + '#r=' + hash;

    root.innerHTML = '';
    var box = el('div', 'ft-result');
    box.appendChild(el('div', 'ft-score', s + ' <span>/ ' + N + '</span>'));
    box.appendChild(el('div', 'ft-verdict', verdict(s)));

    box.appendChild(shareBox(link));

    var reviewBtn = el('button', 'ft-btn ft-btn-ghost', 'Review your answers');
    // Keep the share link on the review page for your own finished run.
    reviewBtn.addEventListener('click', function () { enterReview(flags, state.answers, link); });
    box.appendChild(reviewBtn);

    root.appendChild(box);
    window.scrollTo(0, 0);

    // Easter egg: a perfect-storm 67 shakes the page for a second.
    if (s === 67) {
      document.body.classList.add('ft-shake');
      setTimeout(function () { document.body.classList.remove('ft-shake'); }, 1000);
    }

    // Put the hash in the URL so a refresh keeps the result.
    try { history.replaceState(null, '', link); } catch (e) {}
  }

  function verdict(s) {
    var p = s / N;
    if (p === 1) return 'A perfect run. You know your Raku.';
    if (p >= 0.9) return 'Outstanding — a firm command of the whole course.';
    if (p >= 0.75) return 'Strong result. A few topics to revisit.';
    if (p >= 0.5) return 'A solid pass. Review the ones you missed.';
    if (p >= 0.3) return 'A start — worth another pass through the material.';
    return 'Early days. Work back through the parts and try again.';
  }

  // ---- review mode ---------------------------------------------------------

  function enterReview(flags, answers, shareLink) {
    root.innerHTML = '';
    var s = flags.reduce(function (n, f) { return n + (f ? 1 : 0); }, 0);
    root.appendChild(el('div', 'ft-review-head', '<div class="ft-score small">' + s + ' <span>/ ' + N + '</span></div>' +
      '<p>Review — every question with the correct answer. Green means you got it right.</p>'));

    // Show the share link when reviewing your own finished run, but not when a
    // visitor has arrived via a shared link (no shareLink passed then).
    if (shareLink) root.appendChild(shareBox(shareLink));

    // The 67 easter egg fires whenever a 67 result is shown — including a shared
    // 67 link — so it shakes here too, not only on the finish screen.
    if (s === 67) {
      document.body.classList.add('ft-shake');
      setTimeout(function () { document.body.classList.remove('ft-shake'); }, 1000);
    }

    Q.forEach(function (q, idx) {
      var correct = flags[idx];
      var item = el('div', 'ft-review-item ' + (correct ? 'ok' : 'bad'));
      item.appendChild(el('div', 'ft-meta', '#' + (idx + 1) + ' · Part ' + q.part + (q.topic ? ' · ' + esc(q.topic) : '') +
        ' · ' + (correct ? '✓ correct' : '✗ missed')));
      item.appendChild(el('div', 'ft-q', fmt(q.q)));
      if (q.code) item.appendChild(el('pre', 'ft-code', '<code>' + esc(q.code) + '</code>'));
      item.appendChild(el('div', 'ft-review-ans', answerText(q, answers && answers[idx])));
      if (q.explain) item.appendChild(el('div', 'ft-explain', fmt(q.explain)));
      root.appendChild(item);
    });

    var back = el('button', 'ft-btn ft-btn-ghost', '↑ Back to top');
    back.addEventListener('click', function () { window.scrollTo(0, 0); });
    root.appendChild(back);
    window.scrollTo(0, 0);
  }

  function answerText(q, ans) {
    function show(v) {
      if (q.type === 'boolean') return (v ? 'True' : 'False');
      if (q.type === 'input') return v;
      if (q.type === 'multi') return (Array.isArray(v) ? v : []).map(function (k) { return q.options[k]; }).join(', ');
      return q.options ? q.options[v] : v;
    }
    var right = 'Correct answer: <strong>' + fmt(String(show(q.answer))) + '</strong>';
    if (ans && ans.done && ans.chosen != null && !ans.correct) {
      right += '<br>You answered: <span class="ft-you">' + fmt(String(show(ans.chosen))) + '</span>';
    }
    return right;
  }

  // ---- boot ----------------------------------------------------------------

  if (!N) { root.innerHTML = '<p>The Final Test could not load its questions.</p>'; return; }

  var m = location.hash.match(/[#&]r=([A-Za-z0-9_-]+)/);
  if (m) {
    var flags = decodeResult(m[1]);
    if (flags) { enterReview(flags, null); return; }
    root.appendChild(el('div', 'ft-badlink', 'That result link is not valid, so here is a fresh test.'));
  }
  renderQuestion();
})();
