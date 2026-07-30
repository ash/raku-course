---
title: 'Oplossing: Grootste gemene deler en kleinste gemene veelvoud'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my ($a, $b) = 24, 36;

my $g = $a gcd $b;

say "gcd = $g";
say "lcm = { $a * $b div $g }";
```

🦋 Je kunt de broncode vinden in het bestand [gcd-lcm.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/gcd-lcm.raku).

## Uitvoer

```
gcd = 12
lcm = 72
```

## Opmerkingen

1. `gcd` is een ingebouwde infixoperator, dus `$a gcd $b` geeft de grootste gemene
deler rechtstreeks.

1. Het kleinste gemene veelvoud is het product van de twee getallen gedeeld door hun
ggd — berekend binnen de interpolatie `{ ... }` met de gehele deling `div`.

{% include nav.html %}
