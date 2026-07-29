---
title: 'Решение: Выровняйте части'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @first = 1, 2;
my @second = 3, 4, 5;

my @all = flat(@first, @second);
say @all;
say @all.elems;
```

🦋 Исходный код можно найти в файле [flatten-the-parts.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/flatten-the-parts.raku).

## Вывод

```
[1 2 3 4 5]
5
```

## Комментарии

1. Запись `my @all = @first, @second` _не_ дала бы плоского массива — получился бы вложенный
массив из двух массивов, `[[1 2] [3 4 5]]`.

1. Процедура `flat` сливает элементы обоих массивов в одну плоскую последовательность, которая
затем сохраняется в `@all`. В результате получается пять элементов.

{% include nav.html %}
