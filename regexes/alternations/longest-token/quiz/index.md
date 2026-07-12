---
title: 'Quiz — Alternations'
---

{% include menu.html %}

What does the following program print? Note the single bar `|`.

```raku
say 'download' ~~ / down | download /;
```

{:.quiz}
1 | ｢download｣
0 | ｢down｣
0 | ｢load｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

The single bar `|` uses longest-token matching: when more than one alternative matches at the same spot, the longest one wins. Even though `down` is written first and would match, `|` prefers the longer `download`. With `||` instead, `down` would have won.

</div>

{% include nav.html %}
