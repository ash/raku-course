---
title: 'Решение: Знак и четност'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
for -4, 0, 7 -> $n {
    my $sign   = $n < 0 ?? 'negative' !! $n == 0 ?? 'zero' !! 'positive';
    my $parity = $n %% 2 ?? 'even' !! 'odd';

    say "$n is $sign and $parity";
}
```

🦋 Намерете програмата във файла [classify-number.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/classify-number.raku).

## Изход

```
-4 is negative and even
0 is zero and even
7 is positive and odd
```

## Коментари

1. Знакът се избира с *верига* от тернарни оператори: `negative`, когато е под нулата,
иначе `zero`, когато е равно, иначе `positive`.

1. `$n %% 2` проверява делимостта на две, така че е истина за четните числа и лъжа за
нечетните. (`0` се брои за четно.)

{% include nav.html %}
