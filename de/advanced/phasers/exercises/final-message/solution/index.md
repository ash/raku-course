---
title: 'Solution: Abschlussnachricht'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $count = 0;

END say "processed $count items";

$count++ for 1..3;
```

🦋 Du findest den Quellcode in der Datei [final-message.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/final-message.raku).

## Ausgabe

```
processed 3 items
```

## Kommentare

1. Der `END`-Phaser steht vor der Schleife, wird aber zuletzt ausgeführt — nachdem der Hauptcode abgeschlossen ist. Zu diesem Zeitpunkt wurde `$count` bereits dreimal erhöht.

1. Da der Phaser über `$count` eine Closure bildet, liest er den *endgültigen* Wert der Variable, nicht die `0`, die sie enthielt, als der Phaser im Quellcode erschien. Das ist der übliche Grund, eine Zusammenfassung in `END` zu platzieren.

{% include nav.html %}
