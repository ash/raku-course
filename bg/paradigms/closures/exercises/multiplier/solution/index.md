---
title: 'Решение: Умножител'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub multiplier($factor) {
    -> $x { $x * $factor };
}

my &triple = multiplier(3);
say triple(4);
```

🦋 Намерете програмата във файла [multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/multiplier.raku).

## Изход

```
12
```

## Коментари

1. Върнатият остър блок се затваря върху `$factor`, помнейки, че той е `3`.

1. Извикването му с `4` дава `12`.

{% include nav.html %}
