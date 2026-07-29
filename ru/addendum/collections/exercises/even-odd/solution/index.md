---
title: 'Решение: Разделите на чётные и нечётные'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @numbers = 1..10;

my @even = @numbers.grep(* %% 2);
my @odd  = @numbers.grep(* % 2);

say "even: @even[]";
say "odd: @odd[]";
```

🦋 Исходный код можно найти в файле [even-odd.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/even-odd.raku).

## Вывод

```
even: 2 4 6 8 10
odd: 1 3 5 7 9
```

## Комментарии

1. `* %% 2` истинно для чисел, делящихся на два, а `* % 2` истинно, когда остаток не равен нулю,
то есть для нечётных. Каждый `grep` оставляет свою группу.

1. Интерполяция `@even[]` с пустыми скобками — дзен-срезом — печатает элементы через пробел внутри
строки в двойных кавычках.

{% include nav.html %}
