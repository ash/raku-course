---
title: 'Lösung: Eine Grammatik, zwei Aktionen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Pair {
    token TOP { <a> ',' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class Sum  { method TOP($/) { make $<a>.Int + $<b>.Int } }
class Diff { method TOP($/) { make $<a>.Int - $<b>.Int } }

say Pair.parse('10,20', actions => Sum.new).made;
say Pair.parse('10,20', actions => Diff.new).made;
```

🦋 Du findest den Quellcode in der Datei [two-actions.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/two-actions.raku).

## Ausgabe

```
30
-10
```

## Kommentare

1. Die Grammatik beschreibt nur die Form `Zahl,Zahl`; sie weiß nichts davon, was zu berechnen ist.

1. Die beiden Aktionsklassen hängen derselben Zerlegung verschiedene Bedeutungen an — die eine summiert die Zahlen, die andere zieht sie voneinander ab. Ein anderes `actions`-Objekt an `.parse` zu übergeben genügt für ein anderes Ergebnis, ganz ohne die Grammatik zu ändern.

{% include nav.html %}
