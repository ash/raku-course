---
title: 'Lösung: Eine Aktion in Großbuchstaben'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar WordG {
    token TOP  { <word> }
    token word { \w+ }
}

class UpcaseAction {
    method TOP($/) { make $<word>.Str.uc }
}

say WordG.parse('hello', actions => UpcaseAction.new).made;
```

🦋 Du findest den Quellcode in der Datei [upcase-action.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/upcase-action.raku).

## Ausgabe

```
HELLO
```

## Kommentare

1. Die Grammatik capturt das Wort; die Aktionsklasse entscheidet, was damit geschieht.

1. `$<word>.Str` liefert den getroffenen Text und `.uc` schreibt ihn groß, und genau das legt `make` auf dem Treffer ab.

{% include nav.html %}
