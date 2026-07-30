---
title: 'Lösung: Ein Buchstabe oder eine Ziffer'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say '  @x7' ~~ / <[a..z 0..9]> /;
```

🦋 Du findest den Quellcode in der Datei [digit-class.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/digit-class.raku).

## Ausgabe

```
｢x｣
```

## Kommentare

1. Eine Klasse kann mehrere Bereiche enthalten, einen nach dem anderen. `<[a..z 0..9]>` trifft ein Zeichen, das ein Kleinbuchstabe **oder** eine Ziffer ist. Das Leerzeichen zwischen den beiden Bereichen dient nur der Lesbarkeit — `<[a..z0..9]>` bedeutet genau dasselbe, denn Leerzeichen innerhalb von `<[…]>` werden übergangen, genau wie sonst im Regex.

1. Von links durchlaufen gehören die beiden Leerzeichen und das `@` nicht zur Klasse und werden übersprungen; das erste passende Zeichen ist `x`. (Diese verbundene Klasse kommt dem nahe, wofür die Abkürzung `\w` steht.)

{% include nav.html %}
