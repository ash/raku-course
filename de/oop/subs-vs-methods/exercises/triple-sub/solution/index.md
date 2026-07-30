---
title: 'Lösung: Verdreifachen als Subroutine'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub triple($x) {
    $x * 3;
}

say triple(7);
```

🦋 Du findest den Quellcode in der Datei [triple-sub.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-sub.raku).

## Ausgabe

```
21
```

## Kommentare

1. Als Subroutine ist `triple` eine eigenständige Operation: Sie erhält den zu bearbeitenden Wert als Argument.

1. Die zugehörige Übung löst dieselbe Aufgabe als Methode, sodass Sie die beiden Ansätze vergleichen können.

{% include nav.html %}
