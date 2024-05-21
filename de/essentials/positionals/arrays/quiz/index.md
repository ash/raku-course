---
title: Quiz — Arrays
---

{% include menu.html %}

Es gibt ein Array:

```raku
my @data = 10, 20, 30, 40, 50;
```

## Array-Elemente

Was geben die folgenden Zeilen aus?

{:.quiz-select}

10 | `say @data[0];` — (: 10, 20, 30, 40, 50 :) | Vergiss nicht, dass die Elemente ab `0` gezählt werden.
40 | `say @data[3];` — (: 10, 20, 30, 40, 50 :) | Der Index `3` steht für das 4<sup>te</sup> Element.
50 | `say @data[4];` — (: 10, 20, 30, 40, 50 :)

## Array-Länge

Was geben die folgenden Anweisungen aus?

{:.quiz-select}
5 | `say @data.elems;` — (: 0, 1, 2, 3, 4, 5 :)
5 | `say +@data;` — (: 0, 1, 2, 3, 4, 5 :) | Diese Konvertierung gibt die Größe des Arrays an.
5 | `say +@data.elems;` — (: 0, 1, 2, 3, 4, 5 :) | Das Ergebnis von `@data.elems` in eine Ganzzahl umwandeln, daher keine Änderung.


{% include quiz.html %}

{% include nav.html %}