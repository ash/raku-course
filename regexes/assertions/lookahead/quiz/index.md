---
title: 'Quiz — Lookahead'
---

{% include menu.html %}

What does the following program print?

```raku
say '5 cm' ~~ / \d+ <?before ' cm'> /;
```

{:.quiz}
1 | ｢5｣
0 | ｢5 cm｣
0 | False
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

The positive lookahead `<?before ' cm'>` requires the digits to be followed by ` cm`, which they are. The assertion checks that text but does not consume it, so the match is just the digits, `｢5｣`.

</div>

{% include nav.html %}
