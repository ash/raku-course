---
title: Quiz — Verschachtelte Arrays
---

{% include menu.html %}

Es gibt ein Array von Arrays:

```raku
my @data =
    [1.2, 2.3, 3.4],
    [4.5, 5.6, 6.7],
    [5.6, 6.7, 7.8],
    [6.7, 7.8, 8.9];
```

## Einzelne Elemente

Was erwarten Sie, in der Ausgabe bei jeder der folgenden Codezeilen zu sehen?

{:.quiz-code}
5.6 | say @data[1][1]; # ␣␣␣
1.2 | say @data[0][0]; # ␣␣␣
7.8 | say @data[2][2]; # ␣␣␣

## Vergleichen

Wählen Sie das korrekte boolesche Ergebnis der folgenden Vergleiche aus.

{:.quiz-select}
False | `@data[0][0] == @data[2][2]` ist&nbsp; (: False, True :)
True | `@data[1][1] == @data[2][0]` ist&nbsp; (: False, True :)

## Längen

Welchen Wert geben die folgenden Aufrufe der `size`-Methode zurück?

{:.quiz-select}
4 | `@data.elems` —&nbsp; (: 1, 2, 3, 4, 5 :)
3 | `@data[0].elems` —&nbsp; (: 1, 2, 3, 4, 5 :)
3 | `@data[1].elems` —&nbsp; (: 1, 2, 3, 4, 5 :) 
3 | `@data[2].elems` —&nbsp; (: 1, 2, 3, 4, 5 :)

{% include quiz.html %}

{% include nav.html %}