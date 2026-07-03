/* Full-text search for the course — dependency-free.
   Loads /search-index.json once (on first focus/keystroke), then ranks pages
   in the browser: every query term must appear (in title or body); title hits
   and term frequency drive the score. Renders a results overlay under the box.
   Keyboard: "/" focuses, ↑/↓ move, Enter opens, Esc clears/closes. */
(function () {
  'use strict';

  var INDEX_URL = '/search-index.json';
  var docs = null, loading = false, loadErr = false, waiters = [];
  var box, input, panel, results = [], sel = -1, debounce;

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function load(cb) {
    if (docs) { cb && cb(); return; }
    if (cb) waiters.push(cb);
    if (loading) return;
    loading = true;
    fetch(INDEX_URL)
      .then(function (r) { if (!r.ok) throw 0; return r.json(); })
      .then(function (j) {
        docs = j.map(function (d) {
          var u = d.u, seg = u.replace(/\/+$/, '').split('/').pop() || '';
          return {
            u: u, t: d.t, b: d.b,
            tl: d.t.toLowerCase(), bl: d.b.toLowerCase(),
            ul: u.toLowerCase(),            // slug text, for matching path segments
            seg: seg.toLowerCase(),         // last path segment (the page's own slug)
            depth: u.replace(/^\/|\/$/g, '').split('/').length  // crumb depth
          };
        });
        loading = false;
        waiters.forEach(function (f) { f(); });
        waiters = [];
      })
      .catch(function () { loading = false; loadErr = true; render(); });
  }

  /* Split on whitespace only — atoms keep their symbols, so "**", "~~", "Z="
     and "<=>" survive as searchable units. */
  function atoms(q) {
    return q.trim().split(/\s+/).filter(function (a) { return a.length; });
  }
  /* Smart-case: a query with any uppercase letter matches case-sensitively
     (so "X"/"Z" find the cross/zip operators, not "x"); otherwise it is
     case-insensitive. */
  function smart(q) { return /[A-Z]/.test(q); }

  /* A match counts only at the start of a "word": position 0, or right after a
     non-word character. Word characters are ASCII letters and digits, so a
     query never matches *inside* a word ("dd" misses "Adding") — but operators
     (`**`, `~~`, `<=>`, `Z=`) still match, since they sit after spaces/punctuation. */
  var WORD = /[0-9A-Za-z]/;
  function startsWord(hay, idx) { return idx === 0 || !WORD.test(hay.charAt(idx - 1)); }
  /* First word-start index of `a` in `hay`, or -1. */
  function firstStart(hay, a) {
    var idx = hay.indexOf(a);
    while (idx >= 0) { if (startsWord(hay, idx)) return idx; idx = hay.indexOf(a, idx + 1); }
    return -1;
  }
  /* Count of word-start occurrences of `a` in `hay`, capped. */
  function countStarts(hay, a, cap) {
    var c = 0, idx = hay.indexOf(a);
    while (idx >= 0 && c < cap) { if (startsWord(hay, idx)) c++; idx = hay.indexOf(a, idx + a.length); }
    return c;
  }
  /* True when the match at `idx` also ends on a word boundary — i.e. `a` is a
     whole word (or whole path segment), not just a prefix of a longer one. */
  function wholeWord(hay, a, idx) {
    var after = idx + a.length;
    return after >= hay.length || !WORD.test(hay.charAt(after));
  }

  function search(q) {
    var as = atoms(q);
    if (!as.length) return [];
    var cs = smart(q);
    var lower = as.map(function (a) { return a.toLowerCase(); });
    var qaTB = cs ? as : lower;          // title/body: smart-case
    var slug = lower.join('-');          // "scalar containers" -> "scalar-containers"
    var out = [];
    for (var i = 0; i < docs.length; i++) {
      var d = docs[i];
      var T = cs ? d.t : d.tl, B = cs ? d.b : d.bl;
      var score = 0, ok = true;
      for (var k = 0; k < qaTB.length; k++) {
        var aTB = qaTB[k];
        var tAt = firstStart(T, aTB);
        /* Slugs are lowercase, so matching the smart-cased atom against the
           lowercase URL keeps smart-case for free: an uppercase atom (e.g. "Z")
           won't match a slug, while plain lowercase queries still do. */
        var uAt = firstStart(d.ul, aTB);
        var bc = countStarts(B, aTB, 31);
        if (tAt < 0 && uAt < 0 && bc === 0) { ok = false; break; }
        if (tAt >= 0) score += 10 + (tAt === 0 ? 6 : 0) + (wholeWord(T, aTB, tAt) ? 8 : 0);
        if (uAt >= 0) score += 12 + (wholeWord(d.ul, aTB, uAt) ? 18 : 0);   // hit in the path slug
        score += bc;
      }
      if (ok) {
        if (d.seg === slug) score += 60;             // the page IS this section (slug == query)
        if (T === (cs ? as.join(' ') : slug.replace(/-/g, ' '))) score += 40; // title equals query
        score += Math.max(0, 5 - d.depth);            // prefer shallower, section-level pages
        out.push({ d: d, s: score });
      }
    }
    out.sort(function (a, b) { return b.s - a.s || a.d.depth - b.d.depth; });
    return out.slice(0, 25).map(function (o) { return o.d; });
  }

  function snippet(d, q) {
    var as = atoms(q), cs = smart(q), B = cs ? d.b : d.bl, pos = -1;
    for (var k = 0; k < as.length; k++) {
      var a = cs ? as[k] : as[k].toLowerCase();
      var p = firstStart(B, a);
      if (p >= 0 && (pos < 0 || p < pos)) pos = p;
    }
    if (pos < 0) return d.b.slice(0, 150);
    var start = Math.max(0, pos - 55), end = Math.min(d.b.length, pos + 95);
    return (start > 0 ? '…' : '') + d.b.slice(start, end) + (end < d.b.length ? '…' : '');
  }

  function esc(s) {
    return s.replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* Highlight by locating raw substring ranges first, then escaping each
     segment — so operators containing < > & (e.g. <=>) are marked correctly. */
  function markHTML(text, q) {
    var as = atoms(q);
    if (!as.length) return esc(text);
    var cs = smart(q);
    var hay = cs ? text : text.toLowerCase();
    var ranges = [];
    for (var k = 0; k < as.length; k++) {
      var a = cs ? as[k] : as[k].toLowerCase();
      if (!a) continue;
      var idx = hay.indexOf(a);
      while (idx >= 0) {
        if (startsWord(hay, idx)) ranges.push([idx, idx + a.length]);
        idx = hay.indexOf(a, idx + a.length);
      }
    }
    if (!ranges.length) return esc(text);
    ranges.sort(function (x, y) { return x[0] - y[0]; });
    var merged = [ranges[0].slice()];
    for (var r = 1; r < ranges.length; r++) {
      var last = merged[merged.length - 1];
      if (ranges[r][0] <= last[1]) last[1] = Math.max(last[1], ranges[r][1]);
      else merged.push(ranges[r].slice());
    }
    var out = '', cur = 0;
    for (var m = 0; m < merged.length; m++) {
      out += esc(text.slice(cur, merged[m][0])) + '<mark>' + esc(text.slice(merged[m][0], merged[m][1])) + '</mark>';
      cur = merged[m][1];
    }
    return out + esc(text.slice(cur));
  }

  function crumb(u) {
    return u.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, ' › ');
  }

  function render() {
    if (!panel) return;
    if (loadErr) { panel.innerHTML = '<div class="ss-msg">Search is unavailable.</div>'; panel.hidden = false; return; }
    var q = input.value.trim();
    if (!q) { panel.hidden = true; panel.innerHTML = ''; results = []; sel = -1; return; }
    if (!docs) { panel.innerHTML = '<div class="ss-msg">Loading…</div>'; panel.hidden = false; return; }
    results = search(q); sel = -1;
    if (!results.length) {
      panel.innerHTML = '<div class="ss-msg">No matches for “' + esc(q) + '”.</div>';
      panel.hidden = false; return;
    }
    var html = '';
    for (var i = 0; i < results.length; i++) {
      var d = results[i];
      html += '<a class="ss-hit" href="' + d.u + '">' +
        '<span class="ss-t">' + markHTML(d.t, q) + '</span>' +
        '<span class="ss-c">' + esc(crumb(d.u)) + '</span>' +
        '<span class="ss-s">' + markHTML(snippet(d, q), q) + '</span>' +
        '</a>';
    }
    panel.innerHTML = html; panel.hidden = false;
  }

  function setSel(n) {
    var hits = panel.querySelectorAll('.ss-hit');
    if (!hits.length) return;
    if (sel >= 0 && hits[sel]) hits[sel].classList.remove('sel');
    sel = (n + hits.length) % hits.length;
    hits[sel].classList.add('sel');
    hits[sel].scrollIntoView({ block: 'nearest' });
  }

  function onInput() {
    if (!docs) load(render);
    clearTimeout(debounce);
    debounce = setTimeout(render, 120);
  }

  ready(function () {
    box = document.querySelector('.site-search');
    if (!box) return;
    input = box.querySelector('input');
    panel = box.querySelector('.ss-results');
    var toggle = box.querySelector('.search-toggle');

    /* The box collapses to just the magnifier icon; clicking it (or "/")
       expands the field. It collapses again when emptied and dismissed. */
    function setOpen(o) {
      box.classList.toggle('open', o);
      if (toggle) toggle.setAttribute('aria-expanded', o ? 'true' : 'false');
      if (o) { load(render); input.focus(); }
      else { panel.hidden = true; }
    }
    if (toggle) toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!box.classList.contains('open'));
    });

    input.addEventListener('focus', function () { load(render); });
    input.addEventListener('input', onInput);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); setSel(sel + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setSel(sel - 1); }
      else if (e.key === 'Enter') {
        var hits = panel.querySelectorAll('.ss-hit');
        var h = hits[sel < 0 ? 0 : sel];
        if (h) { e.preventDefault(); window.location.href = h.getAttribute('href'); }
      } else if (e.key === 'Escape') {
        input.value = ''; panel.innerHTML = ''; setOpen(false); if (toggle) toggle.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (!box.contains(e.target)) { panel.hidden = true; if (!input.value) setOpen(false); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement &&
          !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) &&
          !document.activeElement.isContentEditable) {
        e.preventDefault(); setOpen(true);
      }
    });
  });

  /* Dashboard: the per-part "expand all" button opens or closes every subpart
     disclosure in its card at once. */
  ready(function () {
    var btns = document.querySelectorAll('.part-expand');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var card = this.closest('.part-card');
        if (!card) return;
        var ds = card.querySelectorAll('details.toc-subpart');
        var allOpen = true;
        for (var j = 0; j < ds.length; j++) { if (!ds[j].open) { allOpen = false; break; } }
        for (var k = 0; k < ds.length; k++) { ds[k].open = !allOpen; }
        this.setAttribute('aria-expanded', (!allOpen).toString());
        this.setAttribute('title', allOpen ? 'Expand all sections' : 'Collapse all sections');
        this.classList.toggle('on', !allOpen);
      });
    }
  });
})();
