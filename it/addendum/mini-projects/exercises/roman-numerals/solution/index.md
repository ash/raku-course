---
title: 'Soluzione: Numeri romani'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [roman-numerals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/roman-numerals.raku).

## Output

```
MCMXCIV
```

## Commenti

1. La tabella elenca ogni simbolo in ordine di valore decrescente, comprese le forme
sottrattive come `CM` (900) e `IV` (4), così l'algoritmo non deve mai trattarle come casi
speciali.

1. Per ogni voce, il `while` aggiunge il simbolo e sottrae il suo valore tante volte quante
ci sta, così i pezzi più grandi vengono consumati per primi.

{% include nav.html %}
