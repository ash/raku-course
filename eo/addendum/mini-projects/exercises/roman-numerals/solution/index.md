---
title: 'Solvo: Romiaj ciferoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [roman-numerals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/roman-numerals.raku).

## Eligo

```
MCMXCIV
```

## Komentoj

1. La tabelo listigas ĉiun simbolon laŭ malkreskanta valoro, inkluzive de la
subtrahaj formoj kiel `CM` (900) kaj `IV` (4), do la algoritmo neniam devas trakti
ilin speciale.

1. Por ĉiu ero, la `while` almetas la simbolon kaj subtrahas ĝian valoron tiom da
fojoj, kiom ĝi eniras, do la plej grandaj pecoj estas uzataj unue.

{% include nav.html %}
