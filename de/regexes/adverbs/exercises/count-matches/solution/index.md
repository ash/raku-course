---
title: 'Lösung: Zählen Sie die Treffer'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say ('education' ~~ m:g/<[aeiou]>/).elems;
```

🦋 Du findest den Quellcode in der Datei [count-matches.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/count-matches.raku).

## Ausgabe

```
5
```

## Kommentare

1. Die Zeichenklasse `<[aeiou]>` trifft einen Vokal, und das Adverb `:g` liefert jeden solchen Treffer statt nur den ersten.

1. Das Ergebnis verhält sich wie eine Liste, `.elems` zählt also die Treffer: die fünf Vokale in `education` (e, u, a, i, o).

{% include nav.html %}
