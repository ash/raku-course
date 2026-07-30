---
title: 'Lösung: Treffer ohne Rücksicht auf die Schreibung'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'Hello WORLD' ~~ /:i world/;
```

🦋 Du findest den Quellcode in der Datei [case-blind.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/case-blind.raku).

## Ausgabe

```
｢WORLD｣
```

## Kommentare

1. Das Adverb `:i` lässt den Treffer den Unterschied zwischen Groß- und Kleinbuchstaben übergehen.

1. Das kleingeschriebene Muster trifft daher das großgeschriebene `WORLD`.

{% include nav.html %}
