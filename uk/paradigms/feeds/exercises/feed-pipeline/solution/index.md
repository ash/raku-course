---
title: Розв'язання вправи «Конвеєр із потоків»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
(1..8)
    ==> grep(* > 3)
    ==> map(* * 2)
    ==> my @result;

say @result;
```

🦋 Знайдіть програму у файлі [feed-pipeline.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-pipeline.raku).

## Вивід

```
[8 10 12 14 16]
```

## Коментарі

1. Перший етап залишає числа, більші за `3` (тобто `4, 5, 6, 7, 8`); другий подвоює кожне з них.

1. Кожен `==>` передає свій результат наступному етапові, а останній збирає його в `@result`.

{% include nav.html %}
