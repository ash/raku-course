---
title: 'Решение: Съпоставяне без оглед на регистъра'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say 'Hello WORLD' ~~ /:i world/;
```

🦋 Намерете програмата във файла [case-blind.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/case-blind.raku).

## Изход

```
｢WORLD｣
```

## Коментари

1. Наречието `:i` кара съпоставянето да пренебрегне разликата между главни и малки букви.

1. Затова шаблонът с малки букви съвпада с написаното с главни букви `WORLD`.

{% include nav.html %}
