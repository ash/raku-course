---
title: 'Soluzione: Unite due inventari'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my %shop-a = apples => 3, pears => 2;
my %shop-b = apples => 4, plums => 5;

my %total;
for %shop-a, %shop-b -> %shop {
    %total{$_} += %shop{$_} for %shop.keys;
}

say %total.sort.map({ "{.key}: {.value}" }).join(', ');
```

🦋 Trova il programma nel file [merge-inventories.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/merge-inventories.raku).

## Output

```
apples: 7, pears: 2, plums: 5
```

## Commenti

1. Scorrere entrambi gli hash e fare `%total{$_} += ...` aggiunge ogni quantità al totale
corrente, che la chiave fosse già stata vista o no — una chiave mancante parte da zero.

1. `%total.sort` ordina le coppie per chiave, e il `.map` formatta ciascuna come
`chiave: valore` prima che vengano unite.

{% include nav.html %}
