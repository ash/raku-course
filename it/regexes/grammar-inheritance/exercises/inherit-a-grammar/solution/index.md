---
title: 'Soluzione: Ereditate una grammatica'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar Animal {
    token TOP   { <sound> }
    token sound { \w+ }
}

grammar Dog is Animal {
    token sound { 'woof' }
}

grammar Cat is Animal {
    token sound { 'meow' }
}

say Dog.parse('woof').defined;
say Cat.parse('meow').defined;
say Dog.parse('meow').defined;
```

🦋 Trova il programma nel file [inherit-a-grammar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/inherit-a-grammar.raku).

## Output

```
True
True
False
```

## Commenti

1. Sia `Dog is Animal` sia `Cat is Animal` ereditano immutato il token `TOP` dalla base; ciascuna fornisce solo il proprio `sound`.

1. Così un'unica grammatica base viene estesa in due modi diversi. `Dog` riconosce solo `woof` e `Cat` solo `meow` — ed è per questo che `Dog.parse('meow')` fallisce: un cane conserva il proprio `sound` sovrascritto, esattamente come si comportano i metodi sovrascritti sugli oggetti.

{% include nav.html %}
