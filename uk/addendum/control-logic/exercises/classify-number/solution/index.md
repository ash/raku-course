---
title: Розв'язання вправи «Знак і парність»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
for -4, 0, 7 -> $n {
    my $sign   = $n < 0 ?? 'negative' !! $n == 0 ?? 'zero' !! 'positive';
    my $parity = $n %% 2 ?? 'even' !! 'odd';

    say "$n is $sign and $parity";
}
```

🦋 Знайдіть програму у файлі [classify-number.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/classify-number.raku).

## Вивід

```
-4 is negative and even
0 is zero and even
7 is positive and odd
```

## Коментарі

1. Знак обирають *ланцюжком* тернарних операторів: `negative`, коли число нижче
за нуль, інакше `zero`, коли дорівнює, інакше `positive`.

1. `$n %% 2` перевіряє подільність на два, тож воно істинне для парних чисел і
хибне для непарних. (`0` рахується парним.)

{% include nav.html %}
