---
title: Розв'язання вправи «Збирання з умовою»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @vowels = gather {
    for 'education'.comb {
        take $_ if $_ ~~ / <[aeiou]> /;
    }
}

say @vowels;
```

🦋 Знайдіть програму у файлі [gather-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-vowels.raku).

## Вивід

```
[e u a i o]
```

## Коментарі

1. `.comb` розбиває слово на окремі символи, які цикл обходить по порядку.

1. `take` залишає символ лише тоді, коли той збігається з класом голосних, даючи голосні в тому порядку, у якому вони трапляються.

{% include nav.html %}
