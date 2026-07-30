---
title: Sequenzmuster
---

{% include menu.html %}

Der `...`-Operator erkennt mehr als nur arithmetische Schritte.

Wenn du ihm drei Werte gibst, die durch Multiplikation wachsen, fährt er mit einer _geometrischen_ Sequenz fort:

```raku
say 1, 2, 4 ... 64; # (1 2 4 8 16 32 64)
```

Hier ist jeder Wert das Doppelte des vorherigen, sodass die Sequenz sich verdoppelt, bis sie `64` erreicht.

Sequenzen sind nicht auf Zahlen beschränkt. Bei Strings folgt Raku der natürlichen alphabetischen Reihenfolge:

```raku
say 'a' ... 'e'; # (a b c d e)
```

Eine Sequenz kann auch abwärts zählen. Wenn der Endpunkt kleiner als der Start ist, nehmen die Werte ab:

```raku
say 10 ... 1; # (10 9 8 7 6 5 4 3 2 1)
```

In jedem Fall beschreibst du das Muster durch Beispiele, und der `...`-Operator füllt den Rest aus.

{% include nav.html %}
