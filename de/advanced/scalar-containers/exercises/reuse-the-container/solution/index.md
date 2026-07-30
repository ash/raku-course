---
title: 'Solution: Typisiert oder untypisiert'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $untyped;
my Int $typed;

dd $untyped;
dd $typed;

$untyped = 42;
$typed = 42;

dd $untyped;
dd $typed;
```

🦋 Du findest den Quellcode in der Datei [reuse-the-container.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/reuse-the-container.raku).

## Ausgabe

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Kommentare

1. `dd` stellt die beiden Container unterschiedlich dar. Für den untypisierten gibt es nur `$untyped` aus, während für den typisierten der deklarierte Typ vorangestellt wird: `Int $typed`. Dieses Präfix ist genau der Unterschied, den ein deklarierter Typ ausmacht.

1. Auch die leeren Werte unterscheiden sich. Ein untypisierter Container beginnt mit dem einfachen undefinierten Wert `Any`, während ein typisierter Container mit dem undefinierten Wert *seines* Typs beginnt, `Int`.

1. Nachdem beiden `42` zugewiesen wurde, sehen die Werte gleich aus, aber `$typed` trägt weiterhin seinen Typ und würde einen nicht-ganzzahligen Wert ablehnen -- im Gegensatz zu `$untyped`, der alles akzeptiert.

{% include nav.html %}
