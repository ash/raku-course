---
title: Bereiche
---

{% include menu.html %}

Bereiche in Raku erzeugen Listen von aufeinanderfolgenden Elementen.

Im einfachsten Fall ist ein Bereich eine Liste von aufsteigenden ganzen Zahlen. Um einen Bereich zu erstellen, verwenden Sie den `..` Operator und die beiden Werte, die die minimalen und maximalen Werte des Bereichs definieren:

```raku
1 .. 5
```

Leerzeichen um den Operator sind optional. Die folgende Konstruktion kann wie folgt geschrieben werden:

```raku
1..5
```

Während ein Bereich ein Mittel zur Erzeugung von Listen ist, bleibt er dennoch ein einzelnes Objekt, sodass er in einer skalaren Variablen gespeichert werden kann:

```raku
my $r = 1 .. 5;
```

## Nicht nur Zahlen

Es ist möglich, einen Bereich aus anderen Datentypen zu erstellen, für die Raku weiß, wie man sie inkrementiert. Zum Beispiel:

```raku
my $letters = 'a' .. 'z';
```

Bereiche sind in Raku Objekte ihres eigenen Datentyps. Der Typ der Variable `$r` ist `Range`.

{% include nav.html %}