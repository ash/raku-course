---
title: 'Решение: Запасное значение'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub get($x) {
    fail 'bad' if $x == 0;
    return $x;
}

say get(5) // 'default';
say get(0) // 'default';
```

🦋 Исходный код можно найти в файле [fallback-value.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/fallback-value.raku).

## Вывод

```
5
default
```

## Комментарии

1. `get(5)` обычным образом возвращает `5`, поэтому `//` его и оставляет.

1. `get(0)` возвращает неопределённый `Failure`, поэтому `//` откатывается к `'default'`.
Поскольку `Failure` не определён, `//` обрабатывает его тихо, без броска исключения.

{% include nav.html %}
