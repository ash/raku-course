---
title: 'Lösung: Caesar-Verschlüsselung'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
```

🦋 Du findest den Quellcode in der Datei [caesar-cipher.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/caesar-cipher.raku).

## Ausgabe

```
KHOOR
```

## Kommentare

1. Der Transliterationsoperator `tr///` bildet die Zeichen der ersten Menge Stelle für
Stelle auf die der zweiten ab. `A..Z` steht `D..ZA..C` gegenüber, aus `A` wird also `D`,
aus `B` wird `E`, und das Ende `X Y Z` läuft zurück auf `A B C`.

1. `tr///` verändert die Zeichenkette an Ort und Stelle, nach dem Treffer enthält `$text`
selbst also das verschlüsselte Wort.

{% include nav.html %}
