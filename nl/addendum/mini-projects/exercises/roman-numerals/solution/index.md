---
title: 'Oplossing: Romeinse cijfers'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [roman-numerals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/roman-numerals.raku).

## Uitvoer

```
MCMXCIV
```

## Opmerkingen

1. De tabel somt elk symbool in aflopende waarde op, inclusief de aftrekkende
vormen als `CM` (900) en `IV` (4), zodat het algoritme ze nooit als bijzonder geval hoeft
te behandelen.

1. Voor elk item plakt de `while` het symbool erachter en trekt hij de waarde er zo vaak
af als hij erin past, dus worden de grootste stukken het eerst opgebruikt.

{% include nav.html %}
