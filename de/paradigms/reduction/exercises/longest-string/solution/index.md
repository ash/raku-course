---
title: 'Lösung: Die längste Zeichenkette'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @animals = 'cat', 'elephant', 'dog', 'fox';

say @animals.reduce(-> $a, $b { $b.chars > $a.chars ?? $b !! $a });
```

🦋 Du findest den Quellcode in der Datei [longest-string.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/longest-string.raku).

## Ausgabe

```
elephant
```

## Kommentare

1. Der Block behält die längere seiner beiden Argumente: `$a` ist die bisher längste Zeichenkette, `$b` die nächste, und der ternäre Ausdruck liefert diejenige mit mehr Zeichen.

1. `reduce` trägt diesen Sieger beim nächsten Aufruf als `$a` weiter, nach dem Durchlaufen der ganzen Liste ist der aufgelaufene Wert also die längste Zeichenkette von allen — `elephant`.

{% include nav.html %}
