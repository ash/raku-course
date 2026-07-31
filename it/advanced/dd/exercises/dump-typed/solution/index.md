---
title: 'Solution: Dump di una variabile tipizzata'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my Int $n = 42;
dd $n;
```

🦋 Puoi trovare il codice sorgente nel file [dump-typed.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-typed.raku).

## Output

```
Int $n = 42
```

## Commenti

1. Poiché la variabile ha un tipo dichiarato, `dd` stampa quel tipo prima del nome: `Int $n = 42`.

1. Una variabile senza tipo verrebbe visualizzata semplicemente come `$n = 42`, senza il tipo.

{% include nav.html %}
