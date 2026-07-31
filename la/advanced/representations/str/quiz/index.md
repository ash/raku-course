---
title: Quiz — gist et Str
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
my @a = 1, 2, 3;
say @a.Str;
```

{:.quiz}
0 | [1 2 3]
1 | 1 2 3
0 | (1 2 3)
0 | 1, 2, 3

{% include quiz.html %}

<div class="extended-explanation">

`.Str` formam seriei planae dat, ubi elementa simpliciter spatiis sine uncis iunguntur: `1 2 3`. Forma cum uncis `[1 2 3]` est quod `.gist` (et ergo `say @a`) produceret.

</div>

{% include nav.html %}
