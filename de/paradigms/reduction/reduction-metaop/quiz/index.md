---
title: 'Quiz — Der Reduktions-Metaoperator'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
say [min] 8, 3, 5, 1;
```

{:.quiz}
0 | 17
1 | 1
0 | 8
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

`[min]` reduziert die Liste mit dem Operator `min`, vergleicht die Elemente paarweise und behält das kleinste. Das kleinste von `8, 3, 5, 1` ist `1`.

</div>

{% include nav.html %}
