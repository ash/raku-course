---
title: 'Решение: Совпадение независимо от регистра'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say 'Hello WORLD' ~~ /:i world/;
```

🦋 Исходный код можно найти в файле [case-blind.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/case-blind.raku).

## Вывод

```
｢WORLD｣
```

## Комментарии

1. Наречие `:i` заставляет сопоставление не различать прописные и строчные буквы.

1. Поэтому шаблон в нижнем регистре совпадает с `WORLD` в верхнем.

{% include nav.html %}
