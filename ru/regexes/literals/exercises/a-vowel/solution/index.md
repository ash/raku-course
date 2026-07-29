---
title: 'Решение: Гласная'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say 'Hello' ~~ / <[aeiou]> /;
```

🦋 Исходный код можно найти в файле [a-vowel.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/a-vowel.raku).

## Вывод

```
｢e｣
```

## Комментарии

1. Класс `<[aeiou]>` перечисляет пять гласных; он совпадает с той из них, которая встретится
первой.

1. В слове `Hello` буква `H` в класс не входит, поэтому совпадение начинается с `e`.

{% include nav.html %}
