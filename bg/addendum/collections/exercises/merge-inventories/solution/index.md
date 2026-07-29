---
title: 'Решение: Слейте два склада'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my %shop-a = apples => 3, pears => 2;
my %shop-b = apples => 4, plums => 5;

my %total;
for %shop-a, %shop-b -> %shop {
    %total{$_} += %shop{$_} for %shop.keys;
}

say %total.sort.map({ "{.key}: {.value}" }).join(', ');
```

🦋 Намерете програмата във файла [merge-inventories.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/merge-inventories.raku).

## Изход

```
apples: 7, pears: 2, plums: 5
```

## Коментари

1. Обхождането на двата хеша с `%total{$_} += ...` добавя всяко количество към текущата
сума, независимо дали ключът вече се е срещал: липсващ ключ започва от нула.

1. `%total.sort` подрежда двойките по ключ, а `.map` форматира всяка като
`ключ: стойност`, преди да бъдат свързани.

{% include nav.html %}
