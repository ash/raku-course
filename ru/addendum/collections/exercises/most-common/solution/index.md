---
title: 'Решение: Самый частый элемент'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @values = <a b a c a b>;

my %count;
%count{$_}++ for @values;

say %count.sort(-*.value)[0].key;
```

🦋 Исходный код можно найти в файле [most-common.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/most-common.raku).

## Вывод

```
a
```

## Комментарии

1. После подсчёта каждого значения в `%count` сортировка пар по `-*.value` ставит самое частое
первым, а `[0].key` возвращает сам элемент.

1. Raku может подсчитать всё за вас с помощью [`Bag`](/ru/advanced/sets-bags-mixes), который
считает, сколько раз встречается каждое значение. Затем `.max(*.value)` выбирает пару с наибольшим
количеством, а `.key` — сам элемент:

    ```raku
    my @values = <a b a c a b>;

    say @values.Bag.max(*.value).key; # a
    ```

    Весь подсчёт — это один вызов метода, и никаким хешем управлять не приходится.

{% include nav.html %}
