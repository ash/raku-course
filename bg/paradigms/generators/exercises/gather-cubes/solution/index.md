---
title: 'Решение: Съберете кубовете'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
```

🦋 Намерете програмата във файла [gather-cubes.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-cubes.raku).

## Изход

```
[1 8 27 64]
```

## Коментари

1. `take` се изпълнява по веднъж за всяко число и дава неговия куб (`$_ ** 3`).

1. Блокът `gather` се изчислява до списъка с всички взети стойности.

{% include nav.html %}
