---
title: 'Решение: Подсчёт уникальных'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений этой задачи.

## Код

```raku
my @data = 3, 1, 4, 1, 5, 9, 2, 6, 5, 3;

say set(@data).elems;
```

🦋 Исходный код можно найти в файле [count-the-distinct.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/count-the-distinct.raku).

## Вывод

```
7
```

## Комментарии

1. Передача массива в `set` создаёт множество из его значений. Поскольку множество хранит только уникальные значения, повторяющиеся числа схлопываются в одно.

1. Метод `elems` возвращает количество уникальных значений, которое равно `7`.

{% include nav.html %}
