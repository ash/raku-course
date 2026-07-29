---
title: 'Solution: Абсолютна стойност'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
multi sub abs-value(Int $n where $n < 0) { -$n }
multi sub abs-value(Int $n)              { $n }

say abs-value(-7);
say abs-value(4);
```

🦋 Можете да намерите изходния код във файла [absolute-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/absolute-value.raku).

## Изход

```
7
4
```

## Коментари

1. Първият кандидат съвпада само с отрицателни числа и връща отрицателната стойност, която е положителна.

1. Всяко друго число — нула и положителните — отива към втория кандидат, който връща стойността непроменена.

{% include nav.html %}
