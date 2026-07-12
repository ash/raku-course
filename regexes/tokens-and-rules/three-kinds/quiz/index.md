---
title: 'Quiz — Backtracking'
---

{% include menu.html %}

Which of the three keywords declares a named pattern that **backtracks**, like the patterns written between slashes?

{:.quiz}
1 | `regex`
0 | `token`
0 | `rule`
0 | none of them

{% include quiz.html %}

<div class="extended-explanation">

A `regex` backtracks. Both `token` and `rule` are ratcheting — they do not give back characters once matched — which is why they are the right default inside grammars.

</div>

{% include nav.html %}
