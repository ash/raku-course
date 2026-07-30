---
title: 'Solution: Der Standardwert des Containers'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $count is default(0);

say $count;
say $count.VAR.default;
```

🦋 Du findest den Quellcode in der Datei [container-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/container-default.raku).

## Ausgabe

```
0
0
```

## Kommentare

1. Der `is default(0)`-Trait gibt dem Container einen Standardwert. Da nichts zugewiesen wurde, gibt das Lesen von `$count` diesen Standardwert zurück, sodass die erste Zeile `0` ausgibt.

1. `.VAR.default` fragt den Container selbst nach seinem deklarierten Standardwert, der ebenfalls `0` ist. Ohne den Trait hätte ein nicht typisierter Container den Standardwert `(Any)`.

{% include nav.html %}
