---
title: 'Lösung: Vektoren addieren'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Vector {
    has $.x;
    has $.y;

    method add(Vector $v) {
        Vector.new(x => $.x + $v.x, y => $.y + $v.y);
    }

    method Str { "($.x, $.y)" }
}

my $sum = Vector.new(x => 1, y => 2).add(Vector.new(x => 3, y => 4));

put $sum;
```

🦋 Du findest den Quellcode in der Datei [vector-add.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/vector-add.raku).

## Ausgabe

```
(4, 6)
```

## Kommentare

1. `add` verändert keinen der beiden Vektoren; es baut aus den summierten Komponenten
einen brandneuen `Vector` und liefert ihn zurück.

1. Beachten Sie, dass `Vector` *innerhalb seiner eigenen Definition* verwendet wird — als
Parametertyp `Vector $v` und in `Vector.new`. Das ist völlig in Ordnung: Der Typname ist
vom Beginn seiner Erklärung an bekannt, eine Klasse darf sich in ihren eigenen Methoden
also frei auf sich selbst beziehen. Eine Vorwärtserklärung irgendeiner Art ist nicht
nötig.

1. `put` verwandelt sein Argument mit der Methode `Str` in eine Zeichenkette, es erscheint
also die eigene Formatierung `"($.x, $.y)"`.

{% include nav.html %}
