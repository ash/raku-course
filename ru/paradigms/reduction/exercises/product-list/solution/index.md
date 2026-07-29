---
title: 'Решение: Произведение списка'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say [*] 1..6;
```

🦋 Исходный код можно найти в файле [product-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/product-list.raku).

## Вывод

```
720
```

## Комментарии

1. `[*]` вставляет `*` между каждыми элементами диапазона, перемножая их все.

1. `1 * 2 * 3 * 4 * 5 * 6` равно `720` — это факториал `6`.

{% include nav.html %}
