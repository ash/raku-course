---
title: 'Solution: Ein offener Bereich'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say (2, 4 ... *).head(4);
```

🦋 Den Quellcode findest du in der Datei [open-range.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/open-range.raku).

## Ausgabe

```
(2 4 6 8)
```

## Kommentare

1. Die Startwerte `2, 4` setzen einen arithmetischen Schritt von zwei, und das bloße `*` als Endpunkt bedeutet, dass die Sequenz nie endet.

1. `head(4)` nimmt nur die ersten vier Werte, `2, 4, 6, 8`. Die Sequenz ist lazy, sodass der unbegrenzte Rest nie berechnet wird — der bloße Stern bedeutet hier „egal, ohne Obergrenze".

{% include nav.html %}
