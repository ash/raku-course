---
title: 'Решение: Конвейер больших чисел'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
(1..10) ==> grep(* > 5) ==> my @big;
say @big;
```

🦋 Исходный код можно найти в файле [feed-big-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-big-numbers.raku).

## Вывод

```
[6 7 8 9 10]
```

## Комментарии

1. Конвейер отправляет `1..10` в `grep`, который оставляет числа больше `5`.

1. Результат втекает в `@big` — приёмник, которым заканчивается конвейер.

{% include nav.html %}
