---
title: 'Risinājums: Apvienojiet divus krājumus'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my %shop-a = apples => 3, pears => 2;
my %shop-b = apples => 4, plums => 5;

my %total;
for %shop-a, %shop-b -> %shop {
    %total{$_} += %shop{$_} for %shop.keys;
}

say %total.sort.map({ "{.key}: {.value}" }).join(', ');
```

🦋 Atrodiet programmu failā [merge-inventories.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/merge-inventories.raku).

## Izvade

```
apples: 7, pears: 2, plums: 5
```

## Komentāri

1. Ciklojot pa abām jaucējtabulām un darot `%total{$_} += ...`, katrs daudzums tiek
pieskaitīts kopsummai neatkarīgi no tā, vai atslēga jau ir redzēta, — trūkstoša
atslēga sākas ar nulli.

1. `%total.sort` sakārto pārus pēc atslēgas, un `.map` katru noformē kā
`atslēga: vērtība`, pirms tie tiek savienoti.

{% include nav.html %}
