---
title: 'Решение: Конвейер от потоци'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
(1..8)
    ==> grep(* > 3)
    ==> map(* * 2)
    ==> my @result;

say @result;
```

🦋 Намерете програмата във файла [feed-pipeline.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-pipeline.raku).

## Изход

```
[8 10 12 14 16]
```

## Коментари

1. Първият етап запазва числата, по-големи от `3` (тоест `4, 5, 6, 7, 8`); вторият удвоява всяко от тях.

1. Всеки `==>` подава резултата си на следващия етап, а последният го събира в `@result`.

{% include nav.html %}
