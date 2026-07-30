---
title: 'Quiz — make und made'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Der inline stehende Block legt `$<number>.Int ** 2` auf dem Treffer ab. Das Token hat `5` gecapturt; das in die ganze Zahl `5` zu verwandeln und zu quadrieren ergibt `25`, was `made` liefert.

</div>

{% include nav.html %}
