---
title: 'Решение: Текущи суми'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @numbers = 2, 4, 6, 8;

my $sum = 0;
my @totals = @numbers.map({ $sum += $_ });

say @totals;
```

🦋 Намерете програмата във файла [running-totals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/running-totals.raku).

## Изход

```
[2 6 12 20]
```

## Коментари

1. Блокът държи текуща `$sum` в променлива извън `map`. Всяко извикване добавя текущия
елемент и връща новата сума, така че отобразеният списък е поредицата от частични суми.

1. В Raku това е вградено. [Триъгълното свиване](/bg/advanced/metaoperators/reduction)
`[\+]` пази всяка частична сума, така че цялото решение е един израз:

    ```raku
    my @numbers = 2, 4, 6, 8;
    say [\+] @numbers; # (2 6 12 20)
    ```

    То връща `Seq`, така че общият му вид използва кръгли скоби — `(2 6 12 20)`, — а не
масивните `[2 6 12 20]`, но числата са същите.

{% include nav.html %}
