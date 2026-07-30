---
title: 'Solution: Die unterschiedlichen zählen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @data = 3, 1, 4, 1, 5, 9, 2, 6, 5, 3;

say set(@data).elems;
```

🦋 Du findest den Quellcode in der Datei [count-the-distinct.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/count-the-distinct.raku).

## Ausgabe

```
7
```

## Kommentare

1. Wenn du das Array an `set` übergibst, wird ein Set aus seinen Werten erstellt. Da ein Set nur verschiedene Werte speichert, werden die wiederholten Zahlen zu einem zusammengefasst.

1. Die Methode `elems` gibt dann die Anzahl der verschiedenen Werte zurück, also `7`.

{% include nav.html %}
