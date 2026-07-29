---
title: 'Решение: Соберите числа, кратные трём'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
```

🦋 Исходный код можно найти в файле [gather-multiples-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-multiples-of-three.raku).

## Вывод

```
[3 6 9 12 15]
```

## Комментарии

1. Цикл обходит все числа, но `take` выполняется, только когда `$_ %% 3` истинно.

1. Поэтому в список попадают лишь числа, кратные трём.

{% include nav.html %}
