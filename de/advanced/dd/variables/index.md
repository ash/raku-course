---
title: Variablen dumpen
---

{% include menu.html %}

Rufe `dd` auf, um zu sehen, was eine Variable enthält, ähnlich wie du es mit `say` tun würdest:

```raku
my $var = 42;
dd $var;
```

Zusammen mit dem Wert zeigt `dd` auch den Namen der Variable an:

```console
$var = 42
```

Wenn die Variable einen deklarierten Typ hat, erscheint auch der Typ. Vergleiche die Ausgabe des folgenden Programms mit der vorherigen:

```raku
my Int $var = 42;
dd $var;
```

```console
Int $var = 42
```

Das ist der Hauptunterschied zu `say`: Ein einzelnes `dd`, das auf einen Skalar aufgerufen wird, zeigt dir den Namen und, wenn bekannt, den Typ der Daten -- sodass du mehrere `dd`-Aufrufe in ein Programm einfügen und trotzdem erkennen kannst, welche Ausgabe zu welcher Variable gehört.

Du kannst auch komplexere Datenstrukturen ausgeben, wie Arrays oder Hashes. Hier gibt `dd` eine codeähnliche Darstellung des Wertes aus:

```raku
my @arr = 10, 20, [1, 2, 3], 30;
dd @arr;
```

```console
[10, 20, [1, 2, 3], 30]
```

Beachte, dass das verschachtelte Array deutlich sichtbar bleibt (der Variablenname wird allerdings nicht ausgegeben). Das Gleiche funktioniert für Hashes, deren Schlüssel `dd` in sortierter Reihenfolge ausgibt:

```raku
my %hash =
    gamma => 'g',
    alpha => 'a',
    beta  => 'b';
dd %hash;
```

```console
{:alpha("a"), :beta("b"), :gamma("g")}
```

{% include nav.html %}
