---
title: 'Solution: Ein anonymes Quadrat'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say (1, 2, 3).map(sub ($x) { $x * $x });
```

🦋 Den Quellcode finden Sie in der Datei [anonymous-square.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/anonymous-square.raku).

## Ausgabe

```
(1 4 9)
```

## Kommentare

1. Das `sub ($x) { $x * $x }` hat keinen Namen und wird nie in einer Variablen gespeichert — es wird direkt als Argument an `map` übergeben.

1. `map` wendet es auf jedes Element von `1, 2, 3` an und quadriert sie zu `(1 4 9)`. Eine anonyme Subroutine inline zu übergeben ist der häufigste Grund, eine zu schreiben.

{% include nav.html %}
