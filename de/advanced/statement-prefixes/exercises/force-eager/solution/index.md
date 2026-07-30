---
title: 'Solution: Sofortige Auswertung erzwingen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say (1 .. Inf).is-lazy;
say (eager 1..3).is-lazy;
say (lazy 1..3).is-lazy;
```

🦋 Du findest den Quellcode in der Datei [force-eager.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/force-eager.raku).

## Ausgabe

```
True
False
True
```

## Kommentare

1. Ein Bereich bis `Inf` kann nicht auf einmal berechnet werden, daher ist er lazy: `.is-lazy` gibt `True` zurück.

1. Das `eager`-Präfix erzwingt die sofortige Erzeugung einer Liste, sodass das Ergebnis nicht mehr lazy ist — `.is-lazy` gibt `False` zurück. Dies ist das direkte Gegenstück zur Markierung einer Liste als `lazy`.

1. Wende `eager` nicht auf einen unbegrenzten Bereich an: `eager 1 .. Inf` versucht, jedes Element auf einmal zu berechnen, sodass das Programm einfach hängt und immer mehr Speicher verbraucht, bis es beendet wird. `eager` ist nur bei Listen sicher, von denen du weißt, dass sie endlich sind.

1. Das Gegenteil funktioniert ebenfalls: `lazy 1..3` markiert sogar einen kurzen, endlichen Bereich als lazy, sodass `.is-lazy` `True` zurückgibt. Das Präfix setzt das Laziness-Flag unabhängig davon, wie klein die Liste ist — sie muss nicht unendlich sein, um lazy zu sein.

{% include nav.html %}
