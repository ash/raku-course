---
title: 'Solution: Булева стойност'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
say ?0;
say ?5;
```

🦋 Можете да намерите пълния код във файла [boolean-of-a-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/boolean-of-a-value.raku).

## Резултат

```
False
True
```

## Коментари

1. `?` е префиксен оператор: той стои преди своя операнд и връща неговата булева стойност.

1. `0` е false, а `5` е true, затова програмата отпечатва `False` и `True`.

{% include nav.html %}
