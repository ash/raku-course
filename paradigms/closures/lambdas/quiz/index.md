---
title: 'Quiz — Lambdas'
---

{% include menu.html %}

What does the following program print?

```raku
my &f = -> $x { $x + $x };
say f(9);
```

{:.quiz}
0 | 9
1 | 18
0 | 81
0 | 99

{% include quiz.html %}

<div class="extended-explanation">

The pointy block is a lambda that adds its argument to itself. Called with `9`, it returns `9 + 9`, which is `18`.

</div>

{% include nav.html %}
