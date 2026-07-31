---
title: 'Solution: Nach jedem Schritt'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $sum = 0;

for 1..3 {
    NEXT say "sum so far: $sum";
    $sum += $_;
}
```

🦋 Du findest den Quellcode in der Datei [next-phaser.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/next-phaser.raku).

## Ausgabe

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Kommentare

1. Der `NEXT`-Phaser steht zwar zuerst, wird aber am *Ende* jeder Iteration ausgeführt — nachdem der Rumpf die aktuelle Zahl zu `$sum` addiert hat.

1. Nach dem ersten Durchlauf ist `$sum` also `1`, nach dem zweiten `3` und nach dem dritten `6`. `NEXT` ist das Schleifen-Gegenstück dazu, etwas zwischen den Iterationen auszuführen, im Unterschied zu `FIRST` (einmal am Anfang) und `LAST` (einmal am Ende).

{% include nav.html %}
