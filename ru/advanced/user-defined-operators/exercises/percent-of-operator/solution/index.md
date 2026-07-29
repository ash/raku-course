---
title: 'Решение: Оператор процента'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub infix:<percent-of>($p, $whole) {
    $whole * $p / 100
}

say 20 percent-of 150;
```

🦋 Исходный код можно найти в файле [percent-of-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/percent-of-operator.raku).

## Вывод

```
30
```

## Комментарии

1. Оператор принимает процент `$p` как левый операнд и общую сумму `$whole` как правый операнд.

1. Умножение `$whole` на `$p` и деление на `100` даёт искомую часть: `150 * 20 / 100` равно `30`.

{% include nav.html %}
