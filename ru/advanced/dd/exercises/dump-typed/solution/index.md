---
title: 'Решение: Вывод типизированной переменной'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my Int $n = 42;
dd $n;
```

🦋 Исходный код можно найти в файле [dump-typed.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-typed.raku).

## Вывод

```
Int $n = 42
```

## Комментарии

1. Поскольку у переменной объявлен тип, `dd` выводит этот тип перед именем: `Int $n = 42`.

1. Нетипизированная переменная была бы выведена просто как `$n = 42`, без указания типа.

{% include nav.html %}
