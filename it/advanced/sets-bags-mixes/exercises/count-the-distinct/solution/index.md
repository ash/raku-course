---
title: 'Solution: Contare i distinti'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my @data = 3, 1, 4, 1, 5, 9, 2, 6, 5, 3;

say set(@data).elems;
```

🦋 Puoi trovare il codice sorgente nel file [count-the-distinct.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/count-the-distinct.raku).

## Output

```
7
```

## Commenti

1. Passando l'array a `set` si costruisce un set dei suoi valori. Poiché un set conserva solo valori distinti, i numeri ripetuti vengono ridotti a uno solo.

1. Il metodo `elems` restituisce quindi il numero di valori distinti, che è `7`.

{% include nav.html %}
