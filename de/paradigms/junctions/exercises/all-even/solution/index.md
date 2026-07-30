---
title: 'Lösung: Alle gerade'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say so all(2, 4, 6) %% 2;
```

🦋 Du findest den Quellcode in der Datei [all-even.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/all-even.raku).

## Ausgabe

```
True
```

## Kommentare

1. Die Prüfung betreibt Autothreading: `%% 2` wird auf jeden Wert angewandt, und die `all`-Junction verlangt, dass jeder besteht.

1. Alle drei Zahlen sind gerade, das Ergebnis ist also `True`. Wäre auch nur eine ungerade, wäre es `False`.

{% include nav.html %}
