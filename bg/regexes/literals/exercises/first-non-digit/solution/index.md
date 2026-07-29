---
title: 'Решение: Първият незнак-цифра'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say '42abc' ~~ /\D/;
```

🦋 Намерете програмата във файла [first-non-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/first-non-digit.raku).

## Изход

```
｢a｣
```

## Коментари

1. `\D` е противоположното на `\d`: той съпоставя кой да е знак, който не е цифра.

1. Първите два знака са цифри, така че съвпадението започва при `a`.

{% include nav.html %}
