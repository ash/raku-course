---
title: 'Solvo: Kunigu du inventarojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my %shop-a = apples => 3, pears => 2;
my %shop-b = apples => 4, plums => 5;

my %total;
for %shop-a, %shop-b -> %shop {
    %total{$_} += %shop{$_} for %shop.keys;
}

say %total.sort.map({ "{.key}: {.value}" }).join(', ');
```

🦋 Vi povas trovi la fontkodon en la dosiero [merge-inventories.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/merge-inventories.raku).

## Eligo

```
apples: 7, pears: 2, plums: 5
```

## Komentoj

1. Bukli tra ambaŭ haketmapoj kaj fari `%total{$_} += ...` aldonas ĉiun kvanton al
la kuranta sumo, ĉu la ŝlosilo estis vidita antaŭe aŭ ne — mankanta ŝlosilo
komencas ĉe nulo.

1. `%total.sort` ordigas la parojn laŭ ŝlosilo, kaj la `.map` formatas ĉiun kiel
`ŝlosilo: valoro` antaŭ ol ili estas kunigitaj.

{% include nav.html %}
