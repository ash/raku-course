---
title: 'Решение: Число с proto'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<dec> { \d+ }
    token number:sym<hex> { '0x' <[0..9a..f]>+ }
}

say Number.parse('0xff').defined;
```

🦋 Исходный код можно найти в файле [proto-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-number.raku).

## Вывод

```
True
```

## Комментарии

1. У proto-токена `number` два варианта: `dec` и `hex`.

1. Для `0xff` вариант `dec` сопоставил бы только начальный `0`, оставив `xff` не разобранным;
вариант `hex` сопоставляет всё целиком. По правилу самого длинного токена выбирается `hex`,
и строка разбирается. Та же грамматика по-прежнему принимает и обычное десятичное число,
например `42`.

{% include nav.html %}
