---
title: 'Решение: Малки букви'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $s = 'RAKU';
$s ~~ tr/A..Z/a..z/;
say $s;
```

🦋 Намерете програмата във файла [lowercase-letters.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/lowercase-letters.raku).

## Изход

```
raku
```

## Коментари

1. `tr///` съпоставя всеки знак от първия диапазон със знака на същата позиция във втория.

1. Тук диапазоните вървят от главните букви към малките, така че всяка главна буква се заменя с малкия си партньор — в посока, обратна на преобразуването в главни букви.

{% include nav.html %}
