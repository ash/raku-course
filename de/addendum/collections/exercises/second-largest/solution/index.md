---
title: 'Lösung: Der zweitgrößte Wert'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @numbers = 3, 9, 4, 9, 1, 7;

my @distinct = @numbers.Set.keys.sort;

say @distinct[*-2];
```

🦋 Du findest den Quellcode in der Datei [second-largest.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/second-largest.raku).

## Ausgabe

```
7
```

## Kommentare

1. Die Liste mit `.Set` in eine Menge zu verwandeln wirft die doppelte `9` weg, denn eine
Menge hält jeden Wert nur einmal.

1. `.keys` gibt die verschiedenen Werte zurück — noch immer `Int`s, keine Zeichenketten —,
ein schlichtes `.sort` ordnet sie also numerisch. Der zweitgrößte steht dann eine Stelle
vor dem Ende, `[*-2]`.

{% include nav.html %}
