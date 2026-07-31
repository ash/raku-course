---
title: 'Solutio: Maximus communis divisor et minimum commune multiplum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my ($a, $b) = 24, 36;

my $g = $a gcd $b;

say "gcd = $g";
say "lcm = { $a * $b div $g }";
```

🦋 Inveni codicem fontem in archivo [gcd-lcm.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/gcd-lcm.raku).

## Exitus

```
gcd = 12
lcm = 72
```

## Commentarii

1. `gcd` operator infixus incorporatus est, itaque `$a gcd $b` maximum communem
divisorem directe dat.

1. Minimum commune multiplum productum duorum numerorum per gcd eorum divisum est —
intra interpolationem `{ ... }` per divisionem integram `div` computatum.

{% include nav.html %}
