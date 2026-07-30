---
title: 'Lösung: Alle Zahlen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @numbers = 'x=5, y=10, z=15' ~~ m:g/\d+/;
say @numbers.map(*.Str).join('+');
```

🦋 Du findest den Quellcode in der Datei [all-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/all-numbers.raku).

## Ausgabe

```
5+10+15
```

## Kommentare

1. `\d+` trifft eine ganze Ziffernfolge, und `:g` sammelt jede solche Folge ein — hier `5`, `10` und `15`.

1. Jeder Treffer ist ein Match-Objekt, `.map(*.Str)` macht daraus also blanke Zeichenketten, bevor sie mit `+` verbunden werden.

{% include nav.html %}
