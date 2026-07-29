---
title: Розв'язання вправи «Римські числа»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @table =
    1000 => 'M', 900 => 'CM', 500 => 'D', 400 => 'CD',
    100  => 'C', 90  => 'XC', 50  => 'L', 40  => 'XL',
    10   => 'X', 9   => 'IX', 5   => 'V', 4   => 'IV',
    1    => 'I';

my $n = 1994;
my $roman = '';

for @table -> $pair {
    while $n >= $pair.key {
        $roman ~= $pair.value;
        $n -= $pair.key;
    }
}

say $roman;
```

🦋 Знайдіть програму у файлі [roman-numerals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/roman-numerals.raku).

## Вивід

```
MCMXCIV
```

## Коментарі

1. Таблиця перелічує кожен символ за спаданням значення, зокрема віднімальні
форми на кшталт `CM` (900) та `IV` (4), тож алгоритмові ніколи не доводиться
розглядати їх окремо.

1. Для кожного запису `while` дописує символ і віднімає його значення стільки
разів, скільки той уміщається, тож найбільші шматки витрачаються першими.

{% include nav.html %}
