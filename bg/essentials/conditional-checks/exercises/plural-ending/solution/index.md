---
title: Решение на „Множествено число“
---

{% include menu.html %}

Програмата трябва да провери дали въведеното число е по-голямо от едно и да го постави в множествена форма.

## Код

```raku
my $n = prompt 'How many files to copy? ';
my $ending = $n == 1 ?? '' !! 's';
say "$n file{$ending} copied.";
```

🦋 Намерете програмата във файла [plural-ending.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/plural-ending.raku).

## Изход

Стартирайте програмата поне два пъти и я тествайте с вход `1` и с всяко друго положително цяло число:

```console
$ raku exercises/conditional-checks/plural-ending.raku
How many files to copy? 10
10 files copied.

$ raku exercises/conditional-checks/plural-ending.raku
How many files to copy? 1
1 file copied.
```

## Коментар

Може би ще имате склонност да направите грешка, като напишете единичен `?` вместо двойния `??` и/или двоеточие `:` вместо `!!`.

{% include nav.html %}