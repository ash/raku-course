---
title: 'Lösung: Zählen Sie die Zeilen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
spurt 'data.txt', "a\nb\nc\nd\n";

say 'data.txt'.IO.lines.elems;
```

🦋 Du findest den Quellcode in der Datei [count-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/count-lines.raku).

## Ausgabe

```
4
```

## Kommentare

1. `.IO.lines` liefert die Zeilen der Datei als Liste.

1. `.elems` zählt sie und ergibt `4`.

{% include nav.html %}
