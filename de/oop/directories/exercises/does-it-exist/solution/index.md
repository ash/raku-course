---
title: 'Lösung: Gibt es sie?'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'test.txt'.IO.e;
spurt 'test.txt', 'x';
say 'test.txt'.IO.e;
```

🦋 Du findest den Quellcode in der Datei [does-it-exist.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/does-it-exist.raku).

## Ausgabe

```
False
True
```

## Kommentare

1. `.e` prüft, ob ein Pfad existiert. Die erste Prüfung läuft, bevor die Datei angelegt ist, sie liefert also `False`.

1. `spurt` legt dann `test.txt` an, und die zweite Prüfung auf *demselben* Pfad liefert nun `True`. Das Pfadobjekt erneut zu befragen spiegelt den aktuellen Zustand des Dateisystems wider.

{% include nav.html %}
