---
title: 'Решение: Утроение как подпрограмма'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub triple($x) {
    $x * 3;
}

say triple(7);
```

🦋 Исходный код можно найти в файле [triple-sub.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-sub.raku).

## Вывод

```
21
```

## Комментарии

1. Как подпрограмма, `triple` является самостоятельной операцией: значение, с которым надо
работать, она получает в виде аргумента.

1. Парное упражнение решает ту же задачу методом, так что вы можете сравнить два подхода.

{% include nav.html %}
