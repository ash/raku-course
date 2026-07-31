---
title: 'Soluzione: Dividete in pari e dispari'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @numbers = 1..10;

my @even = @numbers.grep(* %% 2);
my @odd  = @numbers.grep(* % 2);

say "even: @even[]";
say "odd: @odd[]";
```

🦋 Trova il programma nel file [even-odd.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/even-odd.raku).

## Output

```
even: 2 4 6 8 10
odd: 1 3 5 7 9
```

## Commenti

1. `* %% 2` è vero per i numeri divisibili per due; `* % 2` è vero quando il resto è
diverso da zero, cioè per i dispari. Ogni `grep` conserva un gruppo.

1. Interpolare `@even[]` con lo zen slice dalle parentesi vuote stampa gli elementi
separati da spazi dentro la stringa fra virgolette doppie.

{% include nav.html %}
