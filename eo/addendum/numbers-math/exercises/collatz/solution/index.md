---
title: 'Solvo: Paŝoj de Collatz'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $n = 27;
my $steps = 0;

while $n != 1 {
    $n = $n %% 2 ?? $n div 2 !! 3 * $n + 1;
    $steps++;
}

say $steps;
```

🦋 Vi povas trovi la fontkodon en la dosiero [collatz.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/collatz.raku).

## Eligo

```
111
```

## Komentoj

1. La ternara `?? !!` elektas la sekvan valoron per unu esprimo: duonigu `$n`,
kiam ĝi estas para (`$n %% 2`), alie apliku `3 * $n + 1`.

1. `27` estas fama malgranda kazo, kiu faras surprize longan ĉirkaŭvojon — `111`
paŝojn — antaŭ ol ĝi fine trankviliĝas ĉe `1`.

{% include nav.html %}
