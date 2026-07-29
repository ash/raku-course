---
title: 'Решение: Объедините два склада'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [merge-inventories.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/merge-inventories.raku).

## Вывод

```
apples: 7, pears: 2, plums: 5
```

## Комментарии

1. Проход по обоим хешам с `%total{$_} += ...` прибавляет каждое количество к текущей сумме
независимо от того, встречался ли ключ раньше: отсутствующий ключ начинается с нуля.

1. `%total.sort` упорядочивает пары по ключу, а `.map` форматирует каждую как `ключ: значение`
перед их склейкой.

{% include nav.html %}
