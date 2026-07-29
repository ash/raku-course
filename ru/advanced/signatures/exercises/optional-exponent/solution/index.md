---
title: 'Решение: Необязательная степень'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
```

🦋 Исходный код можно найти в файле [optional-exponent.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/optional-exponent.raku).

## Вывод

```
25
125
```

## Комментарии

1. Символ `?` после `$exp` делает его необязательным, поэтому `power` можно вызывать только с основанием.

1. Когда `$exp` опущен, он не определён, и `//` подставляет запасное значение `2`, поэтому `power(5)` возводит основание в квадрат и даёт `25`. Если показатель степени передан, как в `power(5, 3)`, используется переданное значение, что даёт `125`.

{% include nav.html %}
