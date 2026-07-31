---
title: 'Solvo: Plej granda komuna divizoro kaj plej malgranda komuna oblo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my ($a, $b) = 24, 36;

my $g = $a gcd $b;

say "gcd = $g";
say "lcm = { $a * $b div $g }";
```

🦋 Vi povas trovi la fontkodon en la dosiero [gcd-lcm.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/gcd-lcm.raku).

## Eligo

```
gcd = 12
lcm = 72
```

## Komentoj

1. `gcd` estas enkonstruita infiksa operatoro, do `$a gcd $b` donas la plej grandan
komunan divizoron rekte.

1. La plej malgranda komuna oblo estas la produto de la du nombroj dividita per
ilia plej granda komuna divizoro — kalkulita ene de la interpolado `{ ... }` per
la entjera divido `div`.

{% include nav.html %}
