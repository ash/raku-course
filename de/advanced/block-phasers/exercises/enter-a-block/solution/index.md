---
title: 'Solution: Einen Block betreten'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
for 1..2 {
    ENTER say '--entering';
    say "body $_";
}
```

🦋 Du findest den Quellcode in der Datei [enter-a-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/enter-a-block.raku).

## Ausgabe

```
--entering
body 1
--entering
body 2
```

## Kommentare

1. `ENTER` wird jedes Mal ausgeführt, wenn der Block betreten wird, direkt vor seinem Rumpf. Da die Schleife ihren Rumpf einmal pro Iteration betritt, wird `--entering` vor jeder `body`-Zeile ausgegeben.

1. Das ist der Unterschied zwischen `ENTER` und `FIRST`: `FIRST` würde nur einmal für die gesamte Schleife ausgeführt werden, während `ENTER` bei jedem Eintritt ausgeführt wird.

{% include nav.html %}
