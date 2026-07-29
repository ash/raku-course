---
title: 'Решение: Сбор с условием'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @vowels = gather {
    for 'education'.comb {
        take $_ if $_ ~~ / <[aeiou]> /;
    }
}

say @vowels;
```

🦋 Исходный код можно найти в файле [gather-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-vowels.raku).

## Вывод

```
[e u a i o]
```

## Комментарии

1. `.comb` разбивает слово на отдельные символы, которые цикл обходит по порядку.

1. `take` оставляет символ, только когда тот подходит под класс гласных, — так получаются гласные
в том порядке, в каком они встречаются.

{% include nav.html %}
