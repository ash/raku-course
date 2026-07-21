/* Copy-to-clipboard button for Raku code examples.
   Attaches only to `div.highlight.raku` blocks (marked by the page generator),
   so program output (```console) and data (```json) blocks get no button. */
(function () {
  'use strict';

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

  function addButtons() {
    var blocks = document.querySelectorAll('div.highlight.raku:not(.no-run)');
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      if (block.querySelector(':scope > .copy-btn')) continue;
      var pre = block.querySelector('pre');
      if (!pre) continue;

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
