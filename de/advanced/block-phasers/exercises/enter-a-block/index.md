---
title: Einen Block betreten
---

{% include menu.html %}

## Problem

Im Gegensatz zu `FIRST`, der nur einmal ausgeführt wird, wird ein `ENTER`-Phaser *jedes Mal* ausgelöst, wenn der Block betreten wird — und ein Schleifenrumpf wird bei jeder Iteration neu betreten.

Iteriere über `1..2`. Setze innerhalb der Schleife einen `ENTER`-Phaser, der `--entering` ausgibt, und eine gewöhnliche Anweisung, die `body` mit der aktuellen Zahl ausgibt. Beobachte, dass `--entering` einmal pro Iteration erscheint.

## Beispiel

Das Programm gibt aus:

```
--entering
body 1
--entering
body 2
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
