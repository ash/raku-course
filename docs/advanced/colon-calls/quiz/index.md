---
title: 'Quiz — The colon call'
---

{% include menu.html %}

What does the following program print?

```raku
say 'programming'.substr: 0, 3;
```

{:.quiz}
1 | pro
0 | program
0 | ing
0 | (0 3)

{% include quiz.html %}

<div class="extended-explanation">

The colon consumes the *whole* rest of the statement as the argument list, so `substr: 0, 3` is the same as `substr(0, 3)` — both arguments are passed. Starting at index `0` and taking `3` characters gives `pro`.

</div>

{% include nav.html %}
