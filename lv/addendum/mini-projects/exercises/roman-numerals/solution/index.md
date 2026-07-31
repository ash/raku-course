---
title: 'Risinājums: Romiešu cipari'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [roman-numerals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/roman-numerals.raku).

## Izvade

```
MCMXCIV
```

## Komentāri

1. Tabula uzskaita katru simbolu dilstošā vērtību secībā, arī atņemšanas formas,
piemēram, `CM` (900) un `IV` (4), tāpēc algoritmam tās nekad nav jāapstrādā
atsevišķi.

1. Katram ierakstam `while` pieliek simbolu un atņem tā vērtību tik reižu, cik tā
ietilpst, tāpēc vispirms tiek izlietoti lielākie gabali.

{% include nav.html %}
