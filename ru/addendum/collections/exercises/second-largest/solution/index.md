---
title: 'Решение: Второе по величине значение'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @numbers = 3, 9, 4, 9, 1, 7;

my @distinct = @numbers.Set.keys.sort;

say @distinct[*-2];
```

🦋 Исходный код можно найти в файле [second-largest.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/second-largest.raku).

## Вывод

```
7
```

## Комментарии

1. Превращение списка в `Set` методом `.Set` отбрасывает повторную `9`, поскольку множество хранит
каждое значение лишь однажды.

1. `.keys` возвращает различные значения — по-прежнему `Int`, а не строки, — поэтому обычный
`.sort` упорядочивает их численно. Второе по величине оказывается на одну позицию раньше конца:
`[*-2]`.

{% include nav.html %}
