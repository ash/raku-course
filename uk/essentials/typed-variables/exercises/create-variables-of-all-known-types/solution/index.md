---
title: 'Solution: Створення змінних усіх відомих типів'
---

{% include menu.html %}

Можливо, це не той тип програм, який ви будете створювати на практиці. Тим не менш, важливо знати, як досліджувати частини реальних програм.

## Код

Ось можливе рішення, яке створює змінні чотирьох згаданих типів і виводить їх типи.

```raku
my $a = 10;
my $b = 10.2;
my $c = 10e3;
my $d = True;
my $e = 'ten';

say $a, ' ', $a.WHAT;
say $b, ' ', $b.WHAT;
say $c, ' ', $c.WHAT;
say $d, ' ', $d.WHAT;
say $e, ' ', $e.WHAT;
```

🦋 Знайдіть програму у файлі [types.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/types.raku).

## Вивід

Ця програма виводить наступний результат:

```console
$ raku exercises/data-types/types.raku
10 (Int)
10.2 (Rat)
10000 (Num)
True (Bool)
ten (Str)
```

{% include nav.html %}