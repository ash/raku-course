---
title: 'Lösung: Eine Feed-Pipeline'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
(1..8)
    ==> grep(* > 3)
    ==> map(* * 2)
    ==> my @result;

say @result;
```

🦋 Du findest den Quellcode in der Datei [feed-pipeline.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-pipeline.raku).

## Ausgabe

```
[8 10 12 14 16]
```

## Kommentare

1. Die erste Stufe behält die Zahlen größer als `3` (also `4, 5, 6, 7, 8`); die zweite verdoppelt jede.

1. Jedes `==>` reicht sein Ergebnis an die nächste Stufe weiter, und die letzte sammelt es in `@result`.

{% include nav.html %}
