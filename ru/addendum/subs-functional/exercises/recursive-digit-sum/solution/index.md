---
title: 'Решение: Сумма цифр рекурсией'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub digit-sum($n) {
    return $n if $n < 10;
    return $n % 10 + digit-sum($n div 10);
}

say digit-sum(12345);
```

🦋 Исходный код можно найти в файле [recursive-digit-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/recursive-digit-sum.raku).

## Вывод

```
15
```

## Комментарии

1. Базовый случай — однозначное число, которое и есть собственная сумма цифр. Иначе подпрограмма
отделяет последнюю цифру с помощью `$n % 10` и рекурсивно вызывает себя для остатка — `$n div 10`.

{% include nav.html %}
