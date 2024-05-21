---
title: Ganze Zahlen in Raku
---

{% include menu.html %}

Der Datentyp `Int` repräsentiert ganze Zahlen. Zahlen können positiv und negativ sein, und du kannst ein explizites `+`-Zeichen verwenden, wenn du möchtest. Hier sind ein paar offensichtliche Beispiele:

```raku
42
-42
100
-5
0
```

Ja, eine nackte `0` wird standardmäßig als ganze Zahl betrachtet.

## Gruppen von Ziffern

Raku hat eine nette Funktion, die es dir ermöglicht, große Zahlen mit visuellen Hilfsmitteln zu schreiben, die die Ziffern in Tausendergruppen aufteilen:

```raku
1_000_000
-3_141_592
```

Obwohl du eine Zahl wie `34_56` konstruieren kannst, solltest du dies besser vermeiden, da dies andere Personen, die deinen Code lesen, verwirren könnte. Aber du kannst keine zwei aufeinanderfolgenden Unterstriche haben, und du kannst die Zahl weder mit einem Unterstrich beginnen noch beenden.

## Beliebig lange ganze Zahlen

Raku kann Zahlen, die über die 32- oder 64-Bit-Grenzen hinausgehen, perfekt handhaben. Zum Beispiel ist das folgende Programm ein akzeptables Programm, das zwei große ganze Zahlen multipliziert und das korrekte Ergebnis ausgibt.

```raku
say 1_234_456_789_012_345_678_901 * 987_654_321_098_765_432_100;
```

{% include nav.html %}