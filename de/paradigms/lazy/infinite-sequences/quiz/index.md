---
title: 'Quiz — Träge Sequenzen'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
say (2, 4, 6 ... *)[5];
```

{:.quiz}
0 | 10
1 | 12
0 | 14
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

`(2, 4, 6 ... *)` ist die unendliche Folge der geraden Zahlen. Ab Index null gezählt ist Element `5` die sechste gerade Zahl, `12`. Dank der Trägheit werden nur so viele Elemente berechnet wie nötig.

</div>

{% include nav.html %}
