---
title: 'Solvo: Malkomponado en primfaktorojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $n = 360;
my @factors;

for 2..$n -> $d {
    while $n %% $d {
        @factors.push($d);
        $n div= $d;
    }
}

say @factors;
```

🦋 Vi povas trovi la fontkodon en la dosiero [prime-factors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/prime-factors.raku).

## Eligo

```
[2 2 2 3 3 5]
```

## Komentoj

1. Por ĉiu kandidata divizoro `$d`, la interna `while` eldividas ĝin el `$n` tiom
da fojoj, kiom ĝi eniras, puŝante `$d` ĉiufoje. Ĉar la pli malgrandaj faktoroj
estas forigataj unue, ĉiu `$d`, kiu ankoraŭ dividas `$n`, estas garantiite prima.

1. `$n div= $d` estas entjera divido reen en `$n`; ĝi malgrandigas la nombron, ĝis
restas nenio krom `1`.

{% include nav.html %}
