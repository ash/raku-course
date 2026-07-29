---
title: 'Решение: Степен'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub power($base, $exp) {
    $exp == 0 ?? 1 !! $base * power($base, $exp - 1);
}

say power(2, 10);
```

🦋 Намерете програмата във файла [power.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/power.raku).

## Изход

```
1024
```

## Коментари

1. Базовият случай връща `1`, когато степенният показател стигне `0`, защото всяка основа на нулева степен е единица.

1. Рекурсивната стъпка умножава `$base` по `power($base, $exp - 1)`, обелвайки по един множител всеки път. Затова `power(2, 10)` умножава десет двойки и дава `1024`.

{% include nav.html %}
