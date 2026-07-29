---
title: 'Решение: Соберите кубы'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
```

🦋 Исходный код можно найти в файле [gather-cubes.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-cubes.raku).

## Вывод

```
[1 8 27 64]
```

## Комментарии

1. `take` выполняется по одному разу для каждого числа, отдавая его куб (`$_ ** 3`).

1. Блок `gather` вычисляется в список всех взятых значений.

{% include nav.html %}
