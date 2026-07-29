---
title: 'Решение: Номера дней недели'
translations_gpt: true
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Day(5);
say Day(1);
```

🦋 Исходный код можно найти в файле [weekday-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/weekday-values.raku).

## Вывод

```
Fri
Mon
```

## Комментарии

1. Запись констант в виде пар позволяет выбирать числа, здесь начиная с `1`.

1. Вызов типа перечисления как `Day(5)` выполняет обратный поиск: находит константу, значение которой равно `5`, то есть `Fri`. Аналогично `Day(1)` дает `Mon`. Это обратная операция по отношению к `Fri.value`, которая переходит от имени к числу.

{% include nav.html %}
