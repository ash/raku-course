---
title: 'Soluzione: Trasponete una matrice'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @matrix = [1, 2, 3], [4, 5, 6];

say [Z] @matrix;
```

🦋 Trova il programma nel file [transpose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/transpose.raku).

## Output

```
((1 4) (2 5) (3 6))
```

## Commenti

1. Il metaoperatore zip `Z` accoppia gli elementi per posizione. Usato come riduzione
`[Z]`, unisce fra loro tutte le righe, trasformando le colonne in righe — esattamente una
trasposizione.

{% include nav.html %}
