---
title: 'Lösung: Ein optionales Vorzeichen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say '-42' ~~ / '-'? \d+ /;
```

🦋 Du findest den Quellcode in der Datei [optional-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/optional-sign.raku).

## Ausgabe

```
｢-42｣
```

## Kommentare

1. Der Teil `'-'?` trifft ein optionales Minuszeichen — null oder eines davon.

1. `\d+` trifft dann die Ziffernfolge. Dasselbe Muster trifft auch eine Zahl ohne Vorzeichen, etwa `42`.

{% include nav.html %}
