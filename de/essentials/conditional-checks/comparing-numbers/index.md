---
title: Vergleich von Zahlen
---

{% include menu.html %}

Um zwei Zahlen zu vergleichen, verwenden Sie die folgenden Operatoren. Alle sind ziemlich offensichtlich, wenn Sie mit anderen Programmiersprachen vertraut sind.

`==` | Gleich
`!=` | Ungleich
`<` | Kleiner als
`<=` | Kleiner oder gleich
`>` | Größer als
`>=` | Größer oder gleich

## Ungefähr gleich

Zusätzlich zu den Standardoperatoren fügt Raku den ungefähr-gleich-Operator `=~=` hinzu, der die Zahlen ungefähr vergleicht. Sein Ergebnis ist `True`, wenn die beiden Zahlen relativ nahe beieinander liegen. Der maximale relative Unterschied darf den eingebauten Wert `$*TOLERANCE`, der `1e-15` entspricht, nicht überschreiten.

## Unicode-Versionen

Einige der oben genannten Operatoren haben ihre Unicode-Äquivalente:

`!=` | `≠`
`<=` | `≤`
`>=` | `≥`
`=~=` | `≅`

## Beispiele

Einige Beispiele mit den Operatoren, die Zahlen vergleichen:

```raku
say 10 == 10; # True
say 10 != 10; # False

say 15 < 10;  # False
say 10 <= 10; # True
say 16 > 10;  # True
say 10 >= 14; # False

say 1.000000000000000000000001 =~= 1.000000000000000000000002; # True
say 2e17 + 1 =~= 2e17 + 100; # True
```

Beachten Sie, dass die Zahl `1.000000000000000000000001` eine `Rat`-Zahl ist, sodass Sie in einem Ausdruck mit einer nahen Zahl `1.000000000000000000000002` keine Genauigkeit verlieren. Das letzte Beispiel mit `2e17` arbeitet mit `Num`-Zahlen, die eine eingeschränkte Genauigkeit haben.

{% include nav.html %}