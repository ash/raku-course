---
title: Solutio ad ‘Apple sharing’
---

{% include menu.html %}

Hic est solutio ad problema.

## Codex

```raku
my $N = 3;
my $K = 11;

my $gets = $K div $N;
my $remains = $K % $N;

say "Quisque homo accipit $gets malum/mala.";
say "Sunt $remains malum/mala remanentia.";
```

🦋 Plenum codicem invenire potes in archivo [apple-sharing.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/apple-sharing.raku).

## Output

Cum numeris input 3 et 11, programma sequens output imprimit:

```console
$ raku exercises/numbers/apple-sharing.raku
Quisque homo accipit 3 malum/mala.
Sunt 2 malum/mala remanentia.
```

Valorem initialem `$N` et `$K` modifica ut alias res simules:

* `$K` est multiplex `$N`, exempli gratia, `12` et `3`;
* `$K` est aequalis `$N`;
* `$K` est minor `$N`.

## Commentarii

In programmate, duos operatores utimur: `div` ad divisionem integram faciendam et `%` ad residuum divisionis obtinendum. Aliter, calculationes facere potes hoc modo:

```raku
my $gets = $K div $N;
my $remains = $K - $N * $gets;
```

Etiam nota quomodo variabiles in string interpolantur.

{% include nav.html %}