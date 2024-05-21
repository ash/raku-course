---
title: Indizierung von Bereichen
---

{% include menu.html %}

Ein `Range` ist ein positionsbezogener Datentyp. Wie bei Arrays können Sie auf seine einzelnen Elemente zugreifen.

Zum Beispiel, so drucken Sie das dritte Element in der Sequenz der Elemente, die der Bereich erzeugt:

```raku
my $r = 10..20;
say $r[3]; # 13
```

Es ist wichtig zu erkennen, dass Bereiche, im Gegensatz zu Arrays, nicht unbedingt alle Werte im Speicher behalten.

## Größe

Um die Größe des Bereichs zu ermitteln, verwenden Sie die Methode `elems`, wie Sie es auch bei Arrays tun.

```raku
my $r = 10..20;
say $r.elems; # 11
```

{% include nav.html %}