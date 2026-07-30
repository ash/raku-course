---
title: Junctions bauen
translations_gpt:
---

{% include menu.html %}

Am einfachsten bauen Sie eine Junction mit den junktiven Operatoren. Der Operator `|` erzeugt eine _any_-Junction:

```raku
my $j = 1 | 2 | 3;
say $j; # any(1, 2, 3)
```

Der Wert `$j` steht für „1 oder 2 oder 3“. Es gibt vier Arten von Junctions, jede mit einem Operator und einer passenden Funktion:

* `any( … )` oder `a | b` — wahr, wenn **irgendein** Wert trifft
* `all( … )` oder `a & b` — wahr, wenn **alle** Werte treffen
* `one( … )` oder `a ^ b` — wahr, wenn **genau ein** Wert trifft
* `none( … )` — wahr, wenn **kein** Wert trifft (das ist die einzige Art ohne Operatorform — nehmen Sie die Funktion)

Die Funktionsformen sind bei einer Liste praktisch:

```raku
say all(3, 7, 2);  # all(3, 7, 2)
say none(1, 2, 3); # none(1, 2, 3)
```

Am nützlichsten ist eine Junction in einem Vergleich. Zu fragen, ob eine Zahl gleich einer _any_-Junction ist, prüft sie auf einen Schlag gegen jeden Wert:

```raku
say so 2 == any(1, 2, 3); # True
say so 5 == any(1, 2, 3); # False
```

Die Operatorform liest sich ebenso natürlich — `1 | 2 | 3` ist genau dieselbe _any_-Junction:

```raku
say so 2 == 1 | 2 | 3; # True
say so 5 == 1 | 2 | 3; # False
```

Das `so` macht aus dem junktiven Ergebnis einen schlichten Wahrheitswert. Das nächste Thema betrachtet, was dabei hinter den Kulissen geschieht.

{% include nav.html %}
