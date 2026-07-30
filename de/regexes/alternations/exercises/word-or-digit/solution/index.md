---
title: 'Lösung: Wort oder Ziffer'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'item 5' ~~ / cat | \d /;
```

🦋 Du findest den Quellcode in der Datei [word-or-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/word-or-digit.raku).

## Ausgabe

```
｢5｣
```

## Kommentare

1. Die Alternation mischt ein wörtliches `cat` mit einer Zeichenklasse, `\d`. Das Muster trifft diejenige Alternative, die zuerst in der Zeichenkette gefunden wird.

1. In `item 5` gibt es kein `cat`, wohl aber eine Ziffer, `\d` trifft also die `5`.

{% include nav.html %}
