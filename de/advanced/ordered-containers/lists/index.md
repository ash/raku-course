---
title: Listen
---

{% include menu.html %}

Eine Liste ist ebenfalls eine geordnete Sammlung von Werten, aber im Gegensatz zu einem Array ist sie _unveränderlich_: Du kannst ihre Elemente nicht ändern, hinzufügen oder entfernen. Eine Liste wird als kommagetrennte Folge von Werten geschrieben, oft in Klammern eingeschlossen:

```raku
my $colours = ('red', 'green', 'blue');
```

Du kannst die Elemente einer Liste über ihren Index lesen und abfragen, wie viele es gibt, genau wie bei einem Array:

```raku
my $colours = ('red', 'green', 'blue');
say $colours[0];    # red
say $colours.elems; # 3
```

Der Unterschied zeigt sich, wenn du versuchst, ein Element zu ändern. Bei einem Array funktioniert es, weil jedes Element ein Container ist:

```raku
my @array = 1, 2, 3;
@array[0] = 10;
say @array; # [10 2 3]
```

Bei einer Liste ist es ein Fehler, da die Elemente einer Liste einfache Werte und keine Container sind:

```raku
my $list = (1, 2, 3);
$list[0] = 10;
```

Das zweite Programm bricht mit einer Meldung ab:

```
Cannot modify an immutable List ((1 2 3))
  in block <unit> at t.raku line 2
```

Verwende also ein Array (das Sigil `@`), wenn du den Inhalt ändern musst, und eine Liste, wenn du nur eine feste Folge von Werten aufbewahren willst.

{% include nav.html %}
