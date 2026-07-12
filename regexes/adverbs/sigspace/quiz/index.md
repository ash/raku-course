---
title: 'Quiz — Adverbs'
---

{% include menu.html %}

What does the following program print? Note the `:s` adverb and the run of spaces in the text.

```raku
say so 'hello   world' ~~ /:s hello world/;
```

{:.quiz}
1 | True
0 | False
0 | ｢hello   world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

The `:s` adverb makes the space between `hello` and `world` in the pattern significant — it requires whitespace there. One or more spaces all count, so the run of three spaces in the text matches and the result is `True`. Without `:s`, the space in the pattern would be ignored and the pattern would look for `helloworld`.

</div>

{% include nav.html %}
