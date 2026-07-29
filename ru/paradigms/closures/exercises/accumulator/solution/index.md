---
title: 'Решение: Накопитель'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub make-accumulator {
    my $sum = 0;
    return -> $x { $sum += $x };
}

my &acc = make-accumulator;
acc(10);
say acc(5);
```

🦋 Исходный код можно найти в файле [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/accumulator.raku).

## Вывод

```
15
```

## Комментарии

1. Замыкание захватывает `$sum`, которая переживает вызовы.

1. `acc(10)` доводит итог до `10`; `acc(5)` прибавляет пять и возвращает `15`.

{% include nav.html %}
