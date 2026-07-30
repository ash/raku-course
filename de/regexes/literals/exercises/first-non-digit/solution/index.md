---
title: 'Lösung: Die erste Nicht-Ziffer'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say '42abc' ~~ /\D/;
```

🦋 Du findest den Quellcode in der Datei [first-non-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/first-non-digit.raku).

## Ausgabe

```
｢a｣
```

## Kommentare

1. `\D` ist das Gegenstück zu `\d`: Es trifft jedes Zeichen, das keine Ziffer ist.

1. Die ersten beiden Zeichen sind Ziffern, der Treffer beginnt also bei `a`.

{% include nav.html %}
