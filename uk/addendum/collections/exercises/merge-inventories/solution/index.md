---
title: Розв'язання вправи «Об'єднайте два склади»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [merge-inventories.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/merge-inventories.raku).

## Вивід

```
apples: 7, pears: 2, plums: 5
```

## Коментарі

1. Обхід обох хешів із `%total{$_} += ...` додає кожну кількість до поточної суми
незалежно від того, чи ключ уже траплявся: відсутній ключ починається з нуля.

1. `%total.sort` упорядковує пари за ключем, а `.map` форматує кожну як
`ключ: значення` перед тим, як їх з'єднають.

{% include nav.html %}
