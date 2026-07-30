---
title: 'Quiz — De Whatever-ster'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my @a = 5, 6, 7, 8, 9;
say @a[*-2];
```

{:.quiz}
1 | 8
0 | 7
0 | 9
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

In een index staat de kale `*` voor het aantal elementen — hier `5`. Dus `*-2` is index `3`, en het element op index `3` (geteld vanaf nul) is `8`.

</div>

{% include nav.html %}
