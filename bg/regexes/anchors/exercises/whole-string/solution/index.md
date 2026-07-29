---
title: 'Решение: Целият низ'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say so 'hello' ~~ /^ <[a..z]>+ $/;
```

🦋 Намерете програмата във файла [whole-string.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-string.raku).

## Изход

```
True
```

## Коментари

1. Котвите `^` и `$` приковават шаблона към началото и края на низа.

1. Между тях `<[a..z]>+` трябва да покрие всеки знак, така че низ с главна буква или интервал, като `Hello there`, би се провалил.

{% include nav.html %}
