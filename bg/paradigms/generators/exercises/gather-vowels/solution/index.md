---
title: 'Решение: Събиране с условие'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @vowels = gather {
    for 'education'.comb {
        take $_ if $_ ~~ / <[aeiou]> /;
    }
}

say @vowels;
```

🦋 Намерете програмата във файла [gather-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-vowels.raku).

## Изход

```
[e u a i o]
```

## Коментари

1. `.comb` разбива думата на отделни знаци, които цикълът обхожда по ред.

1. `take` запазва знак само когато той съвпадне с класа на гласните, което дава гласните в реда, в който се появяват.

{% include nav.html %}
