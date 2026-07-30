---
title: Quiz — Pointy Blocks
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
(-> $a, $b { $a * $b })(3, 4).say
```

{:.quiz}
1 | 12
0 | 7
0 | 34
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Ein Pointy Block kann mehrere Parameter auflisten: `-> $a, $b` nimmt zwei entgegen. Hier wird er gar nicht in einer Variablen gespeichert — er wird in Klammern eingeschlossen und sofort mit `(3, 4)` aufgerufen, wobei `$a` an `3` und `$b` an `4` gebunden wird. Der Block multipliziert sie und ergibt `12`, und das nachgestellte `.say` gibt es aus.

</div>

{% include nav.html %}
