---
title: 'Quiz — String anchors'
---

{% include menu.html %}

What does the following program print? Note the `$` at the end of the pattern.

```raku
say so 'hello world' ~~ / world $/;
```

{:.quiz}
1 | True
0 | False
0 | ｢world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

The `$` anchor requires the match to finish at the very end of the string. The string `hello world` does end with `world`, so the anchored pattern succeeds and `so` returns `True`.

</div>

{% include nav.html %}
