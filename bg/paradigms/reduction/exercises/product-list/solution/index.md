---
title: 'Решение: Произведение на списък'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say [*] 1..6;
```

🦋 Намерете програмата във файла [product-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/product-list.raku).

## Изход

```
720
```

## Коментари

1. `[*]` вмъква `*` между всеки елемент на диапазона и ги умножава всички.

1. `1 * 2 * 3 * 4 * 5 * 6` е `720` — същото като факториела на `6`.

{% include nav.html %}
