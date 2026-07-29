---
title: 'Решение: Акумулатор'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/accumulator.raku).

## Изход

```
15
```

## Коментари

1. Затварянето улавя `$sum`, която оцелява между извикванията.

1. `acc(10)` прави сумата `10`; `acc(5)` добавя пет и връща `15`.

{% include nav.html %}
