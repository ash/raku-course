---
title: 'Решение: Съберете кратните на три'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
```

🦋 Намерете програмата във файла [gather-multiples-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-multiples-of-three.raku).

## Изход

```
[3 6 9 12 15]
```

## Коментари

1. Цикълът минава през всяко число, но `take` се изпълнява само когато `$_ %% 3` е истина.

1. Затова в списъка се събират само числата, кратни на три.

{% include nav.html %}
