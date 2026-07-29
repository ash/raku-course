---
title: 'Решение: Гласна'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say 'Hello' ~~ / <[aeiou]> /;
```

🦋 Намерете програмата във файла [a-vowel.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/a-vowel.raku).

## Изход

```
｢e｣
```

## Коментари

1. Класът `<[aeiou]>` изброява петте гласни; той съпоставя онази от тях, която се появи първа.

1. В `Hello` буквата `H` не е в класа, така че съвпадението започва при `e`.

{% include nav.html %}
