---
title: Solutio ‘Factorialis’
---

{% include menu.html %}

Factorialis `N` est productum numerorum integrorum ab 1 usque ad et includens `N`. Exempli gratia, factorialis 4 est 1 * 2 * 3 * 4 = 24.

## Codex

```raku
my $n = 8;

my $f = 1;
$f *= $_ pro 2..$n;

dic $f;
```

🦋 Inveni programmatum in archivo [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/factorial.raku).

## Output

Curre programmatum aliquoties et tenta valores diversos `$n`.

```console
$ raku exercises/loops/factorial.raku
40320
```

## Commentarii

Hoc programma utitur operatore `*=`, qui est compendiaria forma multiplicationis cum assignatione: `$x *= $y` aequivalet `$x = $x * $y`.

Potes uti ‘pleno’ circulo loco formae postfixae:

```raku
my $n = 8;

my $f = 1;
pro 2..$n -> $x {
    $f *= $x;
}

dic $f;
```

## Plus de hoc argumento

Ad hanc quaestionem pluries revertemus. In hac parte cursus, etiam hanc quaestionem recursive solvemus.

In secunda parte cursus, discemus de sic dictis operatoribus reductionis, qui solutionem trivialis faciunt. Etiam erit modus definire operatorem custom `!` ut possis scribere `$n!` ad computandum factorialem. Denique erit alia occasio videre solutionem interesting cum de clausula `where` loquemur.

{% include nav.html %}