---
title: 'Решение: Умножитель'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub multiplier($factor) {
    -> $x { $x * $factor };
}

my &triple = multiplier(3);
say triple(4);
```

🦋 Исходный код можно найти в файле [multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/multiplier.raku).

## Вывод

```
12
```

## Комментарии

1. Возвращаемый стрелочный блок замыкается на `$factor`, помня, что тот равен `3`.

1. Вызов с `4` даёт `12`.

{% include nav.html %}
