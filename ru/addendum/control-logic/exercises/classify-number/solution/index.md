---
title: 'Решение: Знак и чётность'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
for -4, 0, 7 -> $n {
    my $sign   = $n < 0 ?? 'negative' !! $n == 0 ?? 'zero' !! 'positive';
    my $parity = $n %% 2 ?? 'even' !! 'odd';

    say "$n is $sign and $parity";
}
```

🦋 Исходный код можно найти в файле [classify-number.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/classify-number.raku).

## Вывод

```
-4 is negative and even
0 is zero and even
7 is positive and odd
```

## Комментарии

1. Знак выбирается *цепочкой* тернарных операторов: `negative`, если число меньше нуля, иначе
`zero`, если равно, иначе `positive`.

1. `$n %% 2` проверяет делимость на два, поэтому выражение истинно для чётных чисел и ложно
для нечётных. (`0` считается чётным.)

{% include nav.html %}
