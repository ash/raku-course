---
title: "Soluzione: Un'azione in maiuscolo"
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [upcase-action.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/upcase-action.raku).

## Output

```
HELLO
```

## Commenti

1. La grammatica cattura la parola; la classe di azioni decide che cosa farne.

1. `$<word>.Str` dà il testo riconosciuto e `.uc` lo rende maiuscolo, ed è questo che `make` conserva sulla corrispondenza.

{% include nav.html %}
