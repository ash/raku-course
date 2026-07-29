---
title: 'Solution: Незадължителна степен'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
```

🦋 Можете да намерите пълния код във файла [optional-exponent.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/optional-exponent.raku).

## Резултат

```
25
125
```

## Коментари

1. `?` след `$exp` го прави незадължителен, така че `power` може да бъде извикана само с основата.

1. Когато `$exp` е пропуснат, той е недефиниран, и `//` задава резервната стойност `2`, така че `power(5)` повдига основата на квадрат до `25`. При подадена степен, както в `power(5, 3)`, се използва тази стойност, което дава `125`.

{% include nav.html %}
