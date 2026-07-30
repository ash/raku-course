---
title: Die Routine reduce
translations_gpt:
---

{% include menu.html %}

Wenn Sie mit einer eigenen Operation statt mit einem einzelnen benannten Operator reduzieren möchten, nehmen Sie die Routine `reduce`. Sie nimmt einen Block mit zwei Argumenten auf und wendet ihn über die Liste an, wobei sie das laufende Ergebnis mitführt:

```raku
say (1..5).reduce(* + *); # 15
```

Der Block `* + *` hat zwei [Whatever](/de/advanced/whatever)-Sterne: Der erste ist das bisherige Ergebnis, der zweite das nächste Element. `reduce` berechnet also `((((1 + 2) + 3) + 4) + 5)`, also `15` — dasselbe wie `[+]`, nur als Block geschrieben.

Um diese beiden Argumente bei der Arbeit zu sehen, geben Sie ihnen Namen und geben Sie jeden Schritt aus. Ein Pointy Block liefert seinen letzten Ausdruck zurück, `$x + $y` ist also zugleich das, worüber der Block berichtet, und der Wert, den er `reduce` zurückgibt:

```raku
say (1..5).reduce(
    -> $x, $y {
        say "$x + $y";
        $x + $y;
    }
);
```

Das gibt aus:

```
1 + 2
3 + 3
6 + 4
10 + 5
15
```

Jede der ersten vier Zeilen ist ein Aufruf des Blocks. `$x` ist das bisher aufgelaufene Ergebnis und `$y` das nächste Element der Liste. Der allererste Aufruf erhält die ersten beiden Werte der Liste, `1` und `2`; jeder spätere Aufruf bekommt die Summe des vorigen Schrittes als `$x` zurück — `3`, dann `6`, dann `10` — gepaart mit der nächsten Zahl als `$y`. Der Wert des Blocks wird zum `$x` des folgenden Aufrufs, und die Endsumme, `15`, ist das, was `reduce` liefert und `say` in der letzten Zeile ausgibt.

Da der Block alles sein kann, ist `reduce` allgemeiner. Bauen Sie etwa einen Wert Schritt für Schritt auf:

```raku
say (1..4).reduce(-> $acc, $x { $acc * 10 + $x }); # 1234
```

Jeder Schritt multipliziert den Akkumulator mit zehn und addiert die nächste Ziffer, wodurch aus den einzelnen Ziffern `1, 2, 3, 4` die Zahl `1234` wird.

Wie die anderen blockannehmenden Methoden liest sich `reduce` gut in der Form mit [Doppelpunkt](/de/advanced/colon-calls), die die Klammern um den Block weglässt:

```raku
say (1..5).reduce: * + *; # 15
```

Kurz: `[op]` ist die schnelle Form für einen benannten Operator, und `reduce` die bewegliche Form für einen beliebigen verbindenden Block. Beide falten eine Liste zu einem einzigen Wert zusammen.

{% include nav.html %}
