---
title: 'Solution: Appiattire le parti'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @first = 1, 2;
my @second = 3, 4, 5;

my @all = flat(@first, @second);
say @all;
say @all.elems;
```

🦋 Puoi trovare il codice sorgente nel file [flatten-the-parts.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/flatten-the-parts.raku).

## Output

```
[1 2 3 4 5]
5
```

## Commenti

1. Scrivere `my @all = @first, @second` _non_ darebbe un array piatto — creerebbe un array annidato di due array, `[[1 2] [3 4 5]]`.

1. La routine `flat` unisce gli elementi di entrambi gli array in una singola sequenza piatta, che viene poi memorizzata in `@all`. Il risultato ha cinque elementi.

{% include nav.html %}
