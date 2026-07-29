---
title: 'Решение: Одно число в трёх системах счисления'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $n = 255;

say $n.base(2);
say $n.base(8);
say $n.base(16);
```

🦋 Исходный код можно найти в файле [number-bases.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/number-bases.raku).

## Вывод

```
11111111
377
FF
```

## Комментарии

1. Метод `.base` представляет целое число в любом основании от 2 до 36 и возвращает строку.
`255` — это `11111111` в двоичной системе и `FF` в шестнадцатеричной: наибольшее значение,
помещающееся в один байт.

{% include nav.html %}
