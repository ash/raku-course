---
title: 'Quiz — Autothreading'
---

{% include menu.html %}

What does the following program print?

```raku
my $j = 1 | 2 | 3;
say $j * 2;
```

{:.quiz}
0 | 12
0 | 6
1 | any(2, 4, 6)
0 | any(1, 2, 3)

{% include quiz.html %}

<div class="extended-explanation">

Multiplying a junction autothreads: `* 2` is applied to each value behind the junction, producing a new `any` junction `any(2, 4, 6)`.

</div>

{% include nav.html %}
