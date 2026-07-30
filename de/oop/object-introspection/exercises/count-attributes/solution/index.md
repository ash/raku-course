---
title: 'Lösung: Zählen Sie die Attribute'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Point {
    has $.x;
    has $.y;
}

say Point.^attributes.elems;
```

🦋 Du findest den Quellcode in der Datei [count-attributes.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/count-attributes.raku).

## Ausgabe

```
2
```

## Kommentare

1. `.^attributes` liefert die Liste der Attribute der Klasse.

1. `.elems` zählt sie. Die Klasse `Point` deklariert zwei Attribute, die Antwort ist also `2`.

{% include nav.html %}
