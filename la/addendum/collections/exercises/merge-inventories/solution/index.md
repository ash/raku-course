---
title: 'Solutio: Duo inventaria coniunge'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my %shop-a = apples => 3, pears => 2;
my %shop-b = apples => 4, plums => 5;

my %total;
for %shop-a, %shop-b -> %shop {
    %total{$_} += %shop{$_} for %shop.keys;
}

say %total.sort.map({ "{.key}: {.value}" }).join(', ');
```

🦋 Inveni codicem fontem in archivo [merge-inventories.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/merge-inventories.raku).

## Exitus

```
apples: 7, pears: 2, plums: 5
```

## Commentarii

1. Per utramque tabulam iterare et `%total{$_} += ...` agere unamquamque quantitatem in
summam currentem addit, sive clavis ante visa est sive non — clavis absens ab
nihilo incipit.

1. `%total.sort` paria secundum clavem ordinat, et `.map` unumquodque ut
`key: value` format antequam iunguntur.

{% include nav.html %}
