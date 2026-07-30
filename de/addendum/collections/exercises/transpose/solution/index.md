---
title: 'Lösung: Eine Matrix transponieren'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @matrix = [1, 2, 3], [4, 5, 6];

say [Z] @matrix;
```

🦋 Du findest den Quellcode in der Datei [transpose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/transpose.raku).

## Ausgabe

```
((1 4) (2 5) (3 6))
```

## Kommentare

1. Der Zip-Metaoperator `Z` paart Elemente nach Stelle. Als Reduktion `[Z]` verwendet,
verzippt er alle Zeilen miteinander und macht aus Spalten Zeilen — genau eine
Transposition.

{% include nav.html %}
