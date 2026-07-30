---
title: 'Solution: Die Reihenfolge der ENDs'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
END say 'first END';
END say 'second END';

say 'body';
```

🦋 Du findest den Quellcode in der Datei [end-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/end-order.raku).

## Ausgabe

```
body
second END
first END
```

## Kommentare

1. Beide `END`-Phaser werden nach dem Hauptcode ausgeführt, daher wird `body` zuerst ausgegeben.

1. Mehrere `END`-Phaser werden in Last-in-First-out-Reihenfolge ausgeführt: `second END`, das später deklariert wurde, wird vor `first END` ausgeführt. Das spiegelt wider, wie Aufräumarbeiten normalerweise das zuletzt Eingerichtete zuerst rückgängig machen müssen.

{% include nav.html %}
