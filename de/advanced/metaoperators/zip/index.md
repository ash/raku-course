---
title: Zip-Metaoperatoren
translations_gpt:
---

{% include menu.html %}

Der Zip-Meta-Operator `Z` nimmt zwei (oder mehr) Listen und paart ihre Elemente nach Position:

```raku
say (1, 2, 3) Z (4, 5, 6); # ((1 4) (2 5) (3 6))
```

Das Ergebnis ist eine Liste von Gruppen: zuerst das erste Element jeder Liste zusammen, dann das zweite jeder Liste, und so weiter.

Noch raffinierter: Sie können `Z` mit einem Operator kombinieren, um auf jedes Paar einzuwirken. Zum Beispiel addiert `Z+` die Elemente positionsweise:

```raku
say (1, 2, 3) Z+ (10, 20, 30); # (11 22 33)
```

Dies ist der Zip-Meta-Operator, der den `+`-Operator umhüllt: Er berechnet `1 + 10`, `2 + 20` und `3 + 30`. Ebenso multipliziert `Z*` die entsprechenden Elemente:

```raku
say (1, 2, 3) Z* (10, 20, 30); # (10 40 90)
```

Und `Z~` verkettet die entsprechenden Zeichenketten:

```raku
say <a b c> Z~ <1 2 3>; # (a1 b2 c3)
```

{% include nav.html %}
