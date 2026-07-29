---
title: 'Решение: Примените дважды'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
```

🦋 Исходный код можно найти в файле [apply-twice.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/apply-twice.raku).

## Вывод

```
18
```

## Комментарии

1. Параметр `&f` получает подпрограмму; внутренний `f($x)` подаётся во внешний `f(...)`.

1. Утроение `2` даёт `6`, а повторное утроение — `18`.

{% include nav.html %}
