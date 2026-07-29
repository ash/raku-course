---
title: Розв'язання вправи «Сортування потоком»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
(3, 1, 2) ==> sort() ==> my @sorted;
say @sorted;
```

🦋 Знайдіть програму у файлі [feed-sorted.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-sorted.raku).

## Вивід

```
[1 2 3]
```

## Коментарі

1. Потік надсилає три числа в `sort`, який їх упорядковує.

1. Відсортований результат утікає в `@sorted`.

{% include nav.html %}
