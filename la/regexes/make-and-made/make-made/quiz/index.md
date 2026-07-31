---
title: Quiz — make et made
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
grammar G {
    token TOP    { <number> { make $<number>.Int ** 2 } }
    token number { \d+ }
}

say G.parse('5').made;
```

{:.quiz}
0 | ｢5｣
0 | 5
1 | 25
0 | 55

{% include quiz.html %}

<div class="extended-explanation">

Clausula inserta `$<number>.Int ** 2` in congruentia servat. Tessera `5` cepit, illud in integrum `5` vertens et in quadratum elevans dat `25`, quod `made` reddit.

</div>

{% include nav.html %}
