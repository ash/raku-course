---
title: Solution of ‘Plural ending’
---

{% include menu.html %}

Програма повинна перевірити, чи введене число більше одного, і поставити його у множину.

## Код

```raku
my $n = prompt 'How many files to copy? ';
my $ending = $n == 1 ?? '' !! 's';
say "$n file{$ending} copied.";
```

🦋 Знайдіть програму у файлі [plural-ending.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/plural-ending.raku).

## Вивід

Запустіть програму принаймні двічі та протестуйте її з введенням `1` та будь-яким іншим додатним цілим числом:

```console
$ raku exercises/conditional-checks/plural-ending.raku
How many files to copy? 10
10 files copied.

$ raku exercises/conditional-checks/plural-ending.raku
How many files to copy? 1
1 file copied.
```

## Коментар

Ви, можливо, схильні помилково набирати одинарний `?` замість подвійного `??` та/або двокрапку `:` замість `!!`.

{% include nav.html %}