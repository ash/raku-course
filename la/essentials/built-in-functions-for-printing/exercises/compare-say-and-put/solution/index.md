---
title: 'Solutio: Compara `say` et `put`'
---

{% include menu.html %}

## Codex

Hic est una ex solutionibus possibilibus:

```raku
my Int $i = 42;
say $i;
put $i;

my Rat $r = 3/4;
say $r;
put $r;

my Num $n = 3e4;
say $n;
put $n;

my Str $s = 'Raku';
say $s;
put $s;

my @a = <hoc est array>;
# say @a.WHAT;
say @a;
put @a;

my List $l = <hoc est list>;
# say $l.WHAT;
say $l;
put $l;

my %h = A => 'alpha', B => 'beta';
say %h;
put %h;
```

Ad maiorem fiduciam, potes etiam typum variabilis imprimere, e.g., ut monstratur pro array et list, ut certus sis te variabilem desiderati typi creavisse.

🦋 Invenire programmatum in archivo [compare-say-and-put.raku](https://github.com/ash/raku-course/blob/master/exercises/built-in-functions-for-printing/compare-say-and-put.raku).

## Output

Output programmatis supra monstrati infra monstratur.

```console
$ raku exercises/built-in-functions-for-printing/compare-say-and-put.raku
42
42
0.75
0.75
30000
30000
Raku
Raku
[hoc est array]
hoc est array
(hoc est list)
hoc est list
{A => alpha, B => beta}
A	alpha
B	beta
```

## Commentarii

Examinando output programmatis, clare videre potes nullam esse differentiam cum imprimendo simplicia genera datae ut numeri et stringae. Pro aggregatis generibus datae, `say` producit paulo magis 'noisy' output comparando ad `put`. Ex altera parte, pro hashis, `put` imprimit ut tabulam comparando ad unam lineam `say`.

Differentia inter formatum output determinatur per modum quo `Str` et `gist` methodi implementantur pro genere in manu. De hoc plura loquemur postea in cursu.

{% include nav.html %}