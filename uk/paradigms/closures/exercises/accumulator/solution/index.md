---
title: Розв'язання вправи «Акумулятор»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
sub make-accumulator {
    my $sum = 0;
    return -> $x { $sum += $x };
}

my &acc = make-accumulator;
acc(10);
say acc(5);
```

🦋 Знайдіть програму у файлі [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/accumulator.raku).

## Вивід

```
15
```

## Коментарі

1. Замикання захоплює `$sum`, яка виживає між викликами.

1. `acc(10)` робить суму рівною `10`; `acc(5)` додає п'ять і повертає `15`.

{% include nav.html %}
