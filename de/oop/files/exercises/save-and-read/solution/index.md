---
title: 'Lösung: Sichern und lesen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
spurt 'number.txt', "42\n";

my $n = slurp('number.txt').trim.Int;
say $n * 2;
```

🦋 Du findest den Quellcode in der Datei [save-and-read.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/save-and-read.raku).

## Ausgabe

```
84
```

## Kommentare

1. `spurt` legt die Datei an und schreibt die Zeichenkette hinein; `slurp` liest die ganze Datei zurück in eine Zeichenkette. Zusammen sind sie ein vollständiger Hin- und Rückweg aus Sichern und Laden.

1. Was aus `slurp` zurückkommt, ist Text — `"42\n"` —, wir schneiden also mit `trim` den abschließenden Zeilenumbruch ab und rufen `.Int` auf, um daraus eine Zahl zu machen, bevor wir rechnen. Das Ergebnis, `42 * 2`, ist `84`.

1. Das Programm funktioniert allerdings auch ohne `.trim.Int`.

{% include nav.html %}
