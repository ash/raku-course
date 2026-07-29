---
title: 'Решение: Започва с'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say so '3 apples' ~~ /^ \d /;
```

🦋 Намерете програмата във файла [starts-with.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/starts-with.raku).

## Изход

```
True
```

## Коментари

1. Котвата `^` принуждава съвпадението да започне в началото на низа, а `\d` след това изисква този пръв знак да е цифра.

1. Без `^` шаблонът би успял и за цифра, появяваща се някъде по-нататък в низа, например в `'apples 3'`.

{% include nav.html %}
