---
title: Quiz — Überlauf
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my int8 $i = -128;
$i--;
say $i;
```

{:.quiz}
1 | 127
0 | -129
0 | -128
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Ein `int8` fasst Werte von `-128` bis `127`. Der Umlauf geschieht auch am unteren Ende: Das Dekrementieren des kleinsten Werts kann nicht `-129` ergeben, also springt er zum größten Wert, `127`.

</div>

{% include nav.html %}
