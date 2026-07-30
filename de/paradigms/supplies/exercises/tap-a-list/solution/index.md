---
title: 'Lösung: Zapfen Sie eine Liste an'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
Supply.from-list('red', 'green', 'blue').tap(-> $v { say $v });
```

🦋 Du findest den Quellcode in der Datei [tap-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/tap-a-list.raku).

## Ausgabe

```
red
green
blue
```

## Kommentare

1. `Supply.from-list` sendet die drei Zeichenketten der Reihe nach aus.

1. Die Zapfstelle läuft für jede einmal und gibt sie aus.

{% include nav.html %}
