---
title: 'Solvo: Komparu `say` kaj `put`'
---

{% include menu.html %}

## Kodo

Jen unu el la eblaj solvoj:

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

my @a = <this is an array>;
# say @a.WHAT;
say @a;
put @a;

my List $l = <this is a list>;
# say $l.WHAT;
say $l;
put $l;

my %h = A => 'alpha', B => 'beta';
say %h;
put %h;
```

Por pli granda konfido, vi ankaŭ povas presi la tipon de la variablo, ekzemple, kiel montrite por tabeloj kaj listoj, por certigi ke vi kreis variablon de la dezirata tipo.

🦋 Trovu la programon en la dosiero [compare-say-and-put.raku](https://github.com/ash/raku-course/blob/master/exercises/built-in-functions-for-printing/compare-say-and-put.raku).

## Eligo

La eligo de la programo montrita supre estas montrita sube.

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
[this is an array]
this is an array
(this is a list)
this is a list
{A => alpha, B => beta}
A	alpha
B	beta
```

## Komentoj

Per ekzamenado de la eligo de la programo, vi klare povas vidi ke ne estas diferenco kiam oni presas simplajn datumtipojn kiel nombroj kaj ĉenoj. Por agregataj datumtipoj, `say` produktas iom pli 'brueman' eligon kompare al `put`. Aliflanke, por hash-oj, `put` presas ĝin kiel tabelo kompare al unu linio de `say`.

La diferenco inter la eliga formato estas determinita de kiel la metodoj `Str` kaj `gist` estas implementitaj por la koncerna tipo. Ni parolos pli pri tio poste en la kurso.

{% include nav.html %}