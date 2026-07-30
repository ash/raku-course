---
title: 'Lösung: Ein Zähler'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Counter {
    has $.count is rw = 0;
}

my $c = Counter.new;
say $c.count;

$c.count++ for ^5;

say $c.count;
```

🦋 Du findest den Quellcode in der Datei [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/counter.raku).

## Ausgabe

```
0
5
```

## Kommentare

1. Das Attribut ist als `is rw` deklariert, damit sein Accessor einen schreibbaren Container liefert, und `= 0` gibt ihm einen Startwert. Das erste `say` bestätigt, dass ein frischer Zähler tatsächlich bei diesem Standardwert `0` beginnt.

1. Weil der Accessor schreibbar ist, funktioniert das Erhöhen mit `++` wie erwartet.

{% include nav.html %}
