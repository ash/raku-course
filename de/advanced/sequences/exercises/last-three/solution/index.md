---
title: 'Solution: Die letzten drei'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say (5, 10 ... 50).tail(3);
```

🦋 Du findest den Quellcode in der Datei [last-three.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sequences/last-three.raku).

## Ausgabe

```
(40 45 50)
```

## Kommentare

1. Die Startwerte `5, 10` setzen einen arithmetischen Schritt von fünf, und die Sequenz läuft bis zu ihrem Endpunkt `50`.

1. `tail(3)` gibt die letzten drei Werte der endlichen Sequenz zurück — `40, 45, 50` — genau wie `head` die ersten paar zurückgeben würde.

{% include nav.html %}
