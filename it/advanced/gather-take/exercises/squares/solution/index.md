---
title: 'Solution: Quadrati'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
my @squares = gather for 1..6 {
    take $_ ** 2 if $_ %% 2;
};

say @squares;
```

🦋 Puoi trovare il codice sorgente nel file [squares.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/squares.raku).

## Output

```
[4 16 36]
```

## Commenti

1. La condizione `if $_ %% 2` decide *se* prendere, e `$_ ** 2` decide *cosa* prendere. Solo i numeri pari `2`, `4`, `6` superano la condizione.

1. I loro quadrati `4`, `16`, `36` sono gli unici valori passati a `take`, quindi `gather` raccoglie esattamente quelli. Eseguire il filtraggio e la trasformazione insieme in un unico `take` e qualcosa che un semplice `map` non puo esprimere in modo altrettanto pulito.

{% include nav.html %}
