---
title: 'Решение: Римски цифри'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [roman-numerals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/roman-numerals.raku).

## Изход

```
MCMXCIV
```

## Коментари

1. Таблицата изброява всеки знак по низходяща стойност, включително изваждащите форми
като `CM` (900) и `IV` (4), така че на алгоритъма никога не му се налага да ги разглежда
отделно.

1. За всеки запис `while` долепя знака и изважда стойността му толкова пъти, колкото се
побира, така че най-големите парчета се изчерпват първи.

{% include nav.html %}
