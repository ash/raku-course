---
title: 'Solution: Ungerade Zahlen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 1, 3 ... 19;
```

🦋 Du findest den Quellcode in der Datei [odd-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sequences/odd-numbers.raku).

## Ausgabe

```
(1 3 5 7 9 11 13 15 17 19)
```

## Kommentare

1. Die beiden Startwerte `1, 3` setzen den Schritt auf zwei, sodass die Sequenz in Zweierschritten hochzählt.

1. Die Sequenz stoppt, sobald sie den Endpunkt `19` erreicht.

{% include nav.html %}
