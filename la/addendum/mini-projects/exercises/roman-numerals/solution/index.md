---
title: 'Solutio: Numeri Romani'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [roman-numerals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/roman-numerals.raku).

## Exitus

```
MCMXCIV
```

## Commentarii

1. Tabula omne signum valore descendente enumerat, formis subtractivis
ut `CM` (900) et `IV` (4) inclusis, ita ut algorithmus numquam eas
speciatim tractare debeat.

1. Pro unoquoque elemento, `while` signum addit valoremque eius totiens subtrahit
quotiens capit, ita ut partes maximae primum consumantur.

{% include nav.html %}
