---
title: 'Lösung: Dreierpotenzen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say (1, * * 3 ... *).head(5);
```

🦋 Du findest den Quellcode in der Datei [powers-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/powers-of-three.raku).

## Ausgabe

```
(1 3 9 27 81)
```

## Kommentare

1. Die Closure `* * 3` ist die Regel für das nächste Glied: nimm das aktuelle und multipliziere mit drei. Die Regel ausdrücklich anzugeben ist verlässlicher, als sie den Operator aus den ersten Gliedern raten zu lassen.

1. Der Endpunkt `*` macht die Folge unendlich, und `.head(5)` nimmt die ersten fünf.

{% include nav.html %}
