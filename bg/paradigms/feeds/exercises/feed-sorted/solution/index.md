---
title: 'Решение: Сортиране с поток'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
(3, 1, 2) ==> sort() ==> my @sorted;
say @sorted;
```

🦋 Намерете програмата във файла [feed-sorted.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-sorted.raku).

## Изход

```
[1 2 3]
```

## Коментари

1. Потокът изпраща трите числа в `sort`, който ги подрежда.

1. Сортираният резултат втича в `@sorted`.

{% include nav.html %}
