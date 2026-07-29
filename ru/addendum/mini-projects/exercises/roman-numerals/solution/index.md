---
title: 'Решение: Римские цифры'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [roman-numerals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/roman-numerals.raku).

## Вывод

```
MCMXCIV
```

## Комментарии

1. Таблица перечисляет все символы по убыванию значения, включая вычитательные формы вроде `CM`
(900) и `IV` (4), поэтому алгоритму не приходится обрабатывать их особым образом.

1. Для каждой записи `while` дописывает символ и вычитает его значение столько раз, сколько оно
помещается, так что сперва расходуются самые крупные части.

{% include nav.html %}
