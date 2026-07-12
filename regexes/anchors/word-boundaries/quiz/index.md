---
title: 'Quiz — Anchors'
---

{% include menu.html %}

What does the following program print?

```raku
say so 'I have a dog' ~~ /<< dog >>/;
```

{:.quiz}
1 | True
0 | False
0 | ｢dog｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

The pattern requires `dog` to be a whole word. In `I have a dog`, `dog` stands alone with a space before it and the end of the string after it, so there is a word boundary on each side, the match succeeds, and `so` returns `True`.

</div>

{% include nav.html %}
