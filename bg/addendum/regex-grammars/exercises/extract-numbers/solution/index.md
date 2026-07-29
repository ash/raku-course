---
title: 'Решение: Извлечете и сумирайте числата'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $text = 'order 12 apples, 3 pears and 25 plums';

my @numbers = $text.comb(/\d+/);

say "numbers: @numbers[]";
say "sum: { [+] @numbers }";
```

🦋 Намерете програмата във файла [extract-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/extract-numbers.raku).

## Изход

```
numbers: 12 3 25
sum: 40
```

## Коментари

1. Подаването на регулярния израз `/\d+/` на `.comb` връща всяка поредица от цифри като
отделен низ, пренебрегвайки думите между тях.

1. `[+] @numbers` ги събира, като по пътя превръща низовете от цифри в числа.

{% include nav.html %}
