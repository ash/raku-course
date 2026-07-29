---
title: 'Решение: Дума или цифра'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say 'item 5' ~~ / cat | \d /;
```

🦋 Намерете програмата във файла [word-or-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/word-or-digit.raku).

## Изход

```
｢5｣
```

## Коментари

1. Алтернативата смесва литерал — `cat` — с клас от знаци — `\d`. Шаблонът съпоставя онази възможност, която бъде намерена първа в низа.

1. В `item 5` няма `cat`, но има цифра, така че `\d` съпоставя `5`.

{% include nav.html %}
