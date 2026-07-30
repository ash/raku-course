---
title: 'Lösung: Ein Texthistogramm'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my %sales = apples => 5, pears => 3, plums => 8;

for %sales.sort -> $pair {
    say "{$pair.key}\t{ '#' x $pair.value }";
}
```

🦋 Du findest den Quellcode in der Datei [histogram.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/histogram.raku).

## Ausgabe

```
apples	#####
pears	###
plums	########
```

## Kommentare

1. Der Zeichenkettenwiederholungsoperator `x` baut jeden Balken: `'#' x 5` ist `#####`.
Der Wert wird schlicht zur Balkenlänge.

1. Das `\t` zwischen Beschriftung und Balken ist ein Tabulatorzeichen, die Balken stehen
also in einer Spalte, statt gleich hinter jedem verschieden langen Namen zu beginnen.

{% include nav.html %}
