---
title: 'Quiz — Precedence'
---

{% include menu.html %}

What does the following program print?

```raku
say 2 * 3 ** 2;
```

{:.quiz}
1 | 18
0 | 36
0 | 12
0 | 81

{% include quiz.html %}

<div class="extended-explanation">

`**` has higher precedence than `*`, so the exponentiation happens first: `3 ** 2` is `9`, and then `2 * 9` is `18`. Reading it left to right as `(2 * 3) ** 2` would give the wrong answer, `36`.

</div>

{% include nav.html %}
