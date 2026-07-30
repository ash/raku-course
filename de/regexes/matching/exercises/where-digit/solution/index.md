---
title: 'Lösung: Wo steht die Ziffer'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $m = 'abc9x2z' ~~ /\d/;
say $m.from;
say $m.to;
```

🦋 Du findest den Quellcode in der Datei [where-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/where-digit.raku).

## Ausgabe

```
3
4
```

## Kommentare

1. Die Klasse `\d` trifft eine einzelne Ziffer. Die Maschine hält bei der **ersten** an, die sie findet — `9`, an Index `3` (Positionen zählen ab null); die spätere `2` wird nie erreicht.

1. `.from` liefert den Anfang des Treffers, `3`, und `.to` die Position direkt hinter seinem Ende, `4`. Die Differenz `.to - .from` ist die Länge des Treffers — hier ein Zeichen.

{% include nav.html %}
