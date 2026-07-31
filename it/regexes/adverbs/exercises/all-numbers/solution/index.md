---
title: 'Soluzione: Tutti i numeri'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @numbers = 'x=5, y=10, z=15' ~~ m:g/\d+/;
say @numbers.map(*.Str).join('+');
```

🦋 Trova il programma nel file [all-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/all-numbers.raku).

## Output

```
5+10+15
```

## Commenti

1. `\d+` riconosce un'intera sequenza di cifre, e `:g` raccoglie ogni sequenza simile — qui `5`, `10` e `15`.

1. Ogni corrispondenza è un oggetto match, quindi `.map(*.Str)` le trasforma in stringhe semplici prima di unirle con `+`.

{% include nav.html %}
