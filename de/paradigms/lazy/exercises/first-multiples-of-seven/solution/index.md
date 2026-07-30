---
title: 'Lösung: Die ersten Vielfachen von sieben'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say (1..*).map(* * 7).head(5);
```

🦋 Du findest den Quellcode in der Datei [first-multiples-of-seven.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/first-multiples-of-seven.raku).

## Ausgabe

```
(7 14 21 28 35)
```

## Kommentare

1. `1..*` ist ein unendlicher Bereich; `.map(* * 7)` multipliziert jedes Element träge mit sieben.

1. `.head(5)` entnimmt nur die ersten fünf, die unendliche Quelle wird also nie vollständig berechnet.

{% include nav.html %}
