---
title: 'Quiz — The `...` operator'
---

{% include menu.html %}

What does the following program print?

```raku
say 1, 3, 9 ... 81;
```

{:.quiz}
1 | (1 3 9 27 81)
0 | (1 3 9 81)
0 | (1 3 5 7 ... 81)
0 | (3 9 27)

{% include quiz.html %}

<div class="extended-explanation">

With *three* seed values, `...` looks at the ratio between them: `1, 3, 9` each triple, so it continues geometrically as `27, 81`. (Two seeds would instead set an arithmetic step.)

</div>

{% include nav.html %}
