---
title: 'Soluzione: Massimo comune divisore e minimo comune multiplo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my ($a, $b) = 24, 36;

my $g = $a gcd $b;

say "gcd = $g";
say "lcm = { $a * $b div $g }";
```

🦋 Trova il programma nel file [gcd-lcm.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/gcd-lcm.raku).

## Output

```
gcd = 12
lcm = 72
```

## Commenti

1. `gcd` è un operatore infisso incorporato, quindi `$a gcd $b` dà direttamente il massimo
comune divisore.

1. Il minimo comune multiplo è il prodotto dei due numeri diviso per il loro massimo comune
divisore — calcolato dentro l'interpolazione `{ ... }` con la divisione intera `div`.

{% include nav.html %}
