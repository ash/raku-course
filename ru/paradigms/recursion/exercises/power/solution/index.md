---
title: 'Решение: Степень'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub power($base, $exp) {
    $exp == 0 ?? 1 !! $base * power($base, $exp - 1);
}

say power(2, 10);
```

🦋 Исходный код можно найти в файле [power.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/power.raku).

## Вывод

```
1024
```

## Комментарии

1. Базовый случай возвращает `1`, когда показатель доходит до `0`: любое основание в нулевой
степени равно единице.

1. Рекурсивный шаг умножает `$base` на `power($base, $exp - 1)`, отслаивая по одному множителю
за раз. Поэтому `power(2, 10)` перемножает десять двоек и даёт `1024`.

{% include nav.html %}
