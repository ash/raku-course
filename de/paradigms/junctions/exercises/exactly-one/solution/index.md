---
title: 'Lösung: Genau eine'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say so one(1, 2, 3) == 2;
```

🦋 Du findest den Quellcode in der Datei [exactly-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/exactly-one.raku).

## Ausgabe

```
True
```

## Kommentare

1. Eine `one`-Junction ist nur wahr, wenn **genau ein** Wert auf den Vergleich trifft.

1. Genau eine von `1, 2, 3` ist gleich `2`, das Ergebnis ist also `True`. Träfen zwei zu (oder keine), wäre es `False`. Das `so` klappt die Junction zu einem schlichten Wahrheitswert zusammen.

{% include nav.html %}
