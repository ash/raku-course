---
title: 'Lösung: Ein Zähler'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub make-counter($step) {
    my $n = 0;
    return sub { $n += $step };
}

my &count = make-counter(10);
say count();
say count();
say count();
```

🦋 Du findest den Quellcode in der Datei [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/counter.raku).

## Ausgabe

```
10
20
30
```

## Kommentare

1. Die Closure fängt zwei Dinge aus `make-counter` ein: den Parameter `$step` und die private Variable `$n`. Beide bleiben am Leben, nachdem `make-counter` zurückgekehrt ist.

1. Jeder Aufruf addiert `$step` zu `$n` und liefert die neue Summe. Ein mit einer anderen Schrittweite gebauter Zähler würde stattdessen um diesen Betrag vorrücken.

{% include nav.html %}
