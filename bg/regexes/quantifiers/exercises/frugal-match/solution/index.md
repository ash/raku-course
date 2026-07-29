---
title: 'Решение: Пестеливо съвпадение'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say 'say "hi" and "bye"' ~~ / '"' .+? '"' /;
```

🦋 Намерете програмата във файла [frugal-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/frugal-match.raku).

## Изход

```
｢"hi"｣
```

## Коментари

1. `?` след `.+` прави квантификатора пестелив, така че той съпоставя възможно най-малко знаци.

1. Затова той спира на първата затваряща `"` и улавя само `"hi"`. Лаком `.+` би стигнал чак до последната `"` и би съпоставил `"hi" and "bye"`.

{% include nav.html %}
