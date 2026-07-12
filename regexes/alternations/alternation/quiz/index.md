---
title: 'Quiz — Grouping'
---

{% include menu.html %}

What does the following program print?

```raku
say 'goodbye' ~~ / [ hello | good ] bye /;
```

{:.quiz}
1 | ｢goodbye｣
0 | ｢good｣
0 | ｢bye｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

The square brackets group the alternation `hello | good` without capturing, so the pattern means “`hello` or `good`, then `bye`”. In `goodbye` the `good` alternative matches and is followed by `bye`, giving `｢goodbye｣`.

</div>

{% include nav.html %}
