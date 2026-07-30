---
title: 'Lösung: Zählen Sie die Zeichen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
spurt 'data.txt', 'Raku';

say slurp('data.txt').chars;
```

🦋 Du findest den Quellcode in der Datei [count-characters.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/count-characters.raku).

## Ausgabe

```
4
```

## Kommentare

1. `spurt` schreibt die Zeichenkette `Raku` in die Datei.

1. `slurp` liest sie als Zeichenkette zurück, und `.chars` zählt ihre Zeichen — vier.

1. Wenn Sie sich die Datei ansehen, finden Sie tatsächlich nur die vier Zeichen; ein Zeilenumbruch wird nicht hinzugefügt.

{% include nav.html %}
