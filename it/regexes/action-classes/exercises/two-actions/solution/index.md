---
title: 'Soluzione: Una grammatica, due classi di azione'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [two-actions.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/two-actions.raku).

## Output

```
30
-10
```

## Commenti

1. La grammatica descrive solo la forma `numero,numero`; non sa nulla di che cosa calcolare.

1. Le due classi di azioni attaccano significati diversi alla stessa analisi — una somma i numeri, l'altra li sottrae. Passare a `.parse` un oggetto `actions` diverso è tutto ciò che serve per ottenere un risultato diverso, senza cambiare affatto la grammatica.

{% include nav.html %}
