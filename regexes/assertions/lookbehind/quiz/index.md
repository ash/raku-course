---
title: 'Quiz — Assertions'
---

{% include menu.html %}

What does the following program print?

```raku
say 'a=5' ~~ / <?after '='> \d+ /;
```

{:.quiz}
1 | ｢5｣
0 | ｢=5｣
0 | ｢a=5｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

The positive lookbehind `<?after '='>` requires an `=` immediately before the current position, then `\d+` matches the digits. The `=` is checked but not consumed, so the match is just `｢5｣`.

</div>

{% include nav.html %}
