---
title: Solvo de ‘Faktorialo’
---

{% include menu.html %}

Faktorialo de `N` estas produkto de entjeraj nombroj de 1 ĝis kaj inkluzive `N`. Ekz., faktorialo de 4 estas 1 * 2 * 3 * 4 = 24.

## Kodo

```raku
my $n = 8;

my $f = 1;
$f *= $_ por 2..$n;

say $f;
```

🦋 Trovu la programon en la dosiero [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/factorial.raku).

## Eligo

Rulu la programon kelkajn fojojn kaj provu malsamajn valorojn de `$n`.

```console
$ raku exercises/loops/factorial.raku
40320
```

## Komentoj

Ĉi tiu programo uzas la operatoron `*=`, kiu estas mallongigo por multipliko kun asigno: `$x *= $y` estas ekvivalenta al `$x = $x * $y`.

Vi povas uzi ‘plenan’ buklon anstataŭ postfiksa formo:

```raku
my $n = 8;

my $f = 1;
por 2..$n -> $x {
    $f *= $x;
}

say $f;
```

## Pli pri ĉi tiu temo

Ni revenos al ĉi tiu tasko kelkajn fojojn. En ĉi tiu parto de la kurso, ni ankaŭ solvos ĉi tiun problemon rekursive.

En la dua parto de la kurso, ni lernos pri la tiel nomataj reduktaj operatoroj, kiuj faras la solvon triviala. Ankaŭ, estos maniero difini kutiman operatoron `!` tiel ke vi povas skribi `$n!` por kalkuli faktorialon. Fine, estos alia ŝanco vidi interesan solvon kiam ni parolos pri la `where` klauzo.

{% include nav.html %}