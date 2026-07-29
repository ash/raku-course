---
title: 'Решение: Сортировка конвейером'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
(3, 1, 2) ==> sort() ==> my @sorted;
say @sorted;
```

🦋 Исходный код можно найти в файле [feed-sorted.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-sorted.raku).

## Вывод

```
[1 2 3]
```

## Комментарии

1. Конвейер отправляет три числа в `sort`, который их упорядочивает.

1. Отсортированный результат втекает в `@sorted`.

{% include nav.html %}
