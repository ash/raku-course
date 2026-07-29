---
title: Розв'язання вправи «Зберіть куби»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
```

🦋 Знайдіть програму у файлі [gather-cubes.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-cubes.raku).

## Вивід

```
[1 8 27 64]
```

## Коментарі

1. `take` виконується по разу для кожного числа, даючи його куб (`$_ ** 3`).

1. Блок `gather` обчислюється у список усіх узятих значень.

{% include nav.html %}
