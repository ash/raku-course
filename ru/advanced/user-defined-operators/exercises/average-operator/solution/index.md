---
title: 'Решение: Оператор среднего значения'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub infix:<avg>($a, $b) {
    ($a + $b) / 2
}

say 4 avg 10;
```

🦋 Исходный код можно найти в файле [average-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/average-operator.raku).

## Вывод

```
7
```

## Комментарии

1. Оператор объявлен как `infix:<avg>`, поэтому он записывается между двумя операндами, так же как `+` или `~`.

1. Тело складывает два операнда и делит на два. Для `4` и `10` результат равен `7`.

{% include nav.html %}
