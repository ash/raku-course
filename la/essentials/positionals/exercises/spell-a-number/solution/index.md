---
title: 'Solutio: Numerum Scribere'
---

{% include menu.html %}

Programma infra habet array inbuilt cum nominibus numerorum a 0 ad 20 et nominibus decadarum: 20, 30, etc. In catena conditionalium inspectionum, numerus distribuitur ad unam ex regulis scribendi.

## Codex

```raku
my $n = @*ARGS[0];

my @nomina = <
    zero unus duo tres quattuor quinque sex septem octo novem decem
    undecim duodecim tredecim quattuordecim quindecim sedecim septendecim duodeviginti undeviginti viginti
    triginta quadraginta quinquaginta sexaginta septuaginta octoginta nonaginta >;

if $n < 20 {
    dic @nomina[$n];
}
elsif $n % 10 { # Numeri duo-digiti non-rotundi, e.g., 34
    dic @nomina[$n / 10 + 18] ~ '-' ~ @nomina[$n % 10];
}
else { # Multipla 10, e.g., 50
    dic @nomina[$n / 10 + 18];
}
```

🦋 Invenies programmatum in archivo [spell-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/spell-a-number.raku).

## Exemplum

Curre programmatum aliquoties ut omnes tres ramos constructionis `si`—`sin`—`aliter` inspicias.

```console
$ raku exercises/positionals/spell-a-number.raku 5
quinque

$ raku exercises/positionals/spell-a-number.raku 12
duodecim

$ raku exercises/positionals/spell-a-number.raku 67
sexaginta-septem

$ raku exercises/positionals/spell-a-number.raku 80
octoginta
```

{% include nav.html %}