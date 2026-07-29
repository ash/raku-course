---
title: 'Решение: Конвейер из нескольких шагов'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
(1..8)
    ==> grep(* > 3)
    ==> map(* * 2)
    ==> my @result;

say @result;
```

🦋 Исходный код можно найти в файле [feed-pipeline.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-pipeline.raku).

## Вывод

```
[8 10 12 14 16]
```

## Комментарии

1. Первая ступень оставляет числа больше `3` (это `4, 5, 6, 7, 8`); вторая удваивает каждое.

1. Каждый `==>` передаёт свой результат следующей ступени, а последний собирает его в `@result`.

{% include nav.html %}
