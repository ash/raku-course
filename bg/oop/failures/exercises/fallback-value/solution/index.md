---
title: 'Решение: Резервна стойност'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub get($x) {
    fail 'bad' if $x == 0;
    return $x;
}

say get(5) // 'default';
say get(0) // 'default';
```

🦋 Намерете програмата във файла [fallback-value.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/fallback-value.raku).

## Изход

```
5
default
```

## Коментари

1. `get(5)` връща `5` нормално, така че `//` го запазва.

1. `get(0)` връща недефиниран `Failure`, така че `//` се връща към `'default'`. Понеже `Failure` е недефиниран, `//` го обработва тихо, без да хвърля.

{% include nav.html %}
