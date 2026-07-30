---
title: Quiz — Der `...`-Operator
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Mit *drei* Startwerten schaut `...` auf das Verhältnis zwischen ihnen: `1, 3, 9` verdreifachen sich jeweils, also fährt er geometrisch mit `27, 81` fort. (Zwei Startwerte würden stattdessen einen arithmetischen Schritt festlegen.)

</div>

{% include nav.html %}
