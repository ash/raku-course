---
title: 'Решение: Анонимный квадрат'
translations_gpt: true
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
say (1, 2, 3).map(sub ($x) { $x * $x });
```

🦋 Исходный код можно найти в файле [anonymous-square.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/anonymous-square.raku).

## Вывод

```
(1 4 9)
```

## Комментарии

1. `sub ($x) { $x * $x }` не имеет имени и не сохраняется в переменной — она передаётся напрямую в `map` в качестве аргумента.

1. `map` применяет её к каждому элементу `1, 2, 3`, возводя их в квадрат и получая `(1 4 9)`. Передача анонимной подпрограммы прямо в вызов — самая частая причина её написания.

{% include nav.html %}
