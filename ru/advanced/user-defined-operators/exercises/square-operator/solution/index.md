---
title: 'Решение: Оператор возведения в квадрат'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub postfix:<²>($x) {
    $x ** 2
}

say 5²;
```

🦋 Исходный код можно найти в файле [square-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/square-operator.raku).

## Вывод

```
25
```

## Комментарии

1. Оператор объявлен как `postfix:<²>`, поэтому его символ — надстрочная двойка — записывается после операнда, как в `5²`.

1. Тело возводит операнд во вторую степень, поэтому `5²` вычисляется как `25`. Ничто не мешает использовать символ Юникода, который отражает математическую запись.

{% include nav.html %}
