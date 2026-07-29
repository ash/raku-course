---
title: 'Решение: Строчные буквы'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $s = 'RAKU';
$s ~~ tr/A..Z/a..z/;
say $s;
```

🦋 Исходный код можно найти в файле [lowercase-letters.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/lowercase-letters.raku).

## Вывод

```
raku
```

## Комментарии

1. `tr///` отображает каждый символ первого диапазона в символ, стоящий на той же позиции
во втором.

1. Здесь диапазоны идут от прописных букв к строчным, поэтому каждая прописная буква заменяется
своей строчной парой — это направление, обратное переводу в верхний регистр.

{% include nav.html %}
