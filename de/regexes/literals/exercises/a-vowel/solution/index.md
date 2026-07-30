---
title: 'Lösung: Ein Vokal'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'Hello' ~~ / <[aeiou]> /;
```

🦋 Du findest den Quellcode in der Datei [a-vowel.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/a-vowel.raku).

## Ausgabe

```
｢e｣
```

## Kommentare

1. Die Klasse `<[aeiou]>` führt die fünf Vokale auf; sie trifft denjenigen, der zuerst vorkommt.

1. In `Hello` gehört der Buchstabe `H` nicht zur Klasse, der Treffer beginnt also bei `e`.

{% include nav.html %}
