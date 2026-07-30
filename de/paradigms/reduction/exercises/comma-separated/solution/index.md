---
title: 'Lösung: Kommagetrennte Liste'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @words = 'Raku', 'is', 'fun';

say @words.reduce(-> $a, $b { "$a, $b" });
```

🦋 Du findest den Quellcode in der Datei [comma-separated.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/comma-separated.raku).

## Ausgabe

```
Raku, is, fun
```

## Kommentare

1. Hier **baut** der Block einen Wert, statt einen auszuwählen: `$a` ist die bisher zusammengesetzte Zeichenkette und `$b` das nächste Wort, und `"$a, $b"` klebt sie mit einem Komma und einem Leerzeichen zusammen.

1. Der erste Aufruf verbindet `'Raku'` und `'is'` zu `Raku, is`; der zweite verbindet das mit `'fun'` zu `Raku, is, fun`. Das ist genau die Art von Verbinden mit Trennzeichen, die der Metaoperator `[~]` allein nicht ausdrücken kann.

1. In echtem Code würden Sie zur eingebauten Methode `join` greifen, die genau das tut — `say @words.join(', ');` gibt dasselbe `Raku, is, fun` aus. Sinn der Übung ist es, denselben Gedanken als `reduce`-Block auszudrücken.

{% include nav.html %}
