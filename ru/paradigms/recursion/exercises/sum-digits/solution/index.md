---
title: 'Решение: Сумма цифр'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub sum-digits($n) {
    $n < 10 ?? $n !! $n % 10 + sum-digits($n div 10);
}

say sum-digits(1234);
```

🦋 Исходный код можно найти в файле [sum-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/sum-digits.raku).

## Вывод

```
10
```

## Комментарии

1. Базовый случай — однозначное число, которое само и является своей суммой цифр.

1. Иначе `$n % 10` — это последняя цифра, а `$n div 10` её отбрасывает; `1 + 2 + 3 + 4` даёт `10`.

{% include nav.html %}
