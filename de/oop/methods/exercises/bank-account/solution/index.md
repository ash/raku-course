---
title: 'Lösung: Ein laufender Roboter'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Robot {
    has $.position is rw = 0;

    method move($steps = 1) {
        $.position += $steps;
    }
}

my $r = Robot.new;
$r.move(5);
$r.move;
$r.move(2);

say $r.position;
```

🦋 Du findest den Quellcode in der Datei [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/bank-account.raku).

## Ausgabe

```
8
```

## Kommentare

1. Das Attribut `position` ist `is rw`, damit die Methode es ändern kann, und es ist standardmäßig `0`, sodass ein frischer Roboter im Ursprung startet.

1. Die Methode `move` gibt ihrem Parameter einen Standardwert, `$steps = 1`. Der bloße Aufruf `$r.move` rückt daher um einen Schritt vor, während `$r.move(5)` und `$r.move(2)` um den angegebenen Betrag vorrücken. Die drei Aufrufe addieren `5 + 1 + 2`, die Endposition ist also `8`.

{% include nav.html %}
