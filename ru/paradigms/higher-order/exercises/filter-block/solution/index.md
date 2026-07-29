---
title: 'Решение: Фильтрация блоком'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say (1..10).grep(* > 5).elems;
```

🦋 Исходный код можно найти в файле [filter-block.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/filter-block.raku).

## Вывод

```
5
```

## Комментарии

1. `grep` принимает блок `* > 5` и оставляет те числа, для которых он истинен: `6, 7, 8, 9, 10`.

1. `.elems` их считает, давая `5`.

{% include nav.html %}
