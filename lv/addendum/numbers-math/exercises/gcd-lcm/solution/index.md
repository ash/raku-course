---
title: 'Risinājums: Lielākais kopīgais dalītājs un mazākais kopīgais dalāmais'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my ($a, $b) = 24, 36;

my $g = $a gcd $b;

say "gcd = $g";
say "lcm = { $a * $b div $g }";
```

🦋 Atrodiet programmu failā [gcd-lcm.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/gcd-lcm.raku).

## Izvade

```
gcd = 12
lcm = 72
```

## Komentāri

1. `gcd` ir iebūvēts infikss operators, tāpēc `$a gcd $b` dod lielāko kopīgo
dalītāju tieši.

1. Mazākais kopīgais dalāmais ir abu skaitļu reizinājums, dalīts ar to lielāko
kopīgo dalītāju, — aprēķināts interpolācijā `{ ... }` ar veselo skaitļu dalīšanu
`div`.

{% include nav.html %}
