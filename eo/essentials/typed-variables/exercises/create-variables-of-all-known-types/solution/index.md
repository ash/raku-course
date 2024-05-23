---
title: Solvo de ‘Krei variablojn de ĉiuj konataj tipoj’
---

{% include menu.html %}

Probable, ĉi tio ne estas speco de programoj, kiujn vi kreos en via praktiko. Tamen, estas grave scii kiel introspekti la partojn de realaj programoj.

## Kodo

Jen ebla solvo, kiu kreas la variablojn de la kvar menciitaj tipoj kaj presas iliajn tipojn.

```raku
my $a = 10;
my $b = 10.2;
my $c = 10e3;
my $d = True;
my $e = 'ten';

say $a, ' ', $a.WHAT;
say $b, ' ', $b.WHAT;
say $c, ' ', $c.WHAT;
say $d, ' ', $d.WHAT;
say $e, ' ', $e.WHAT;
```

🦋 Trovu la programon en la dosiero [types.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/types.raku).

## Eligo

Ĉi tiu programo presas la jenan eligon:

```console
$ raku exercises/data-types/types.raku
10 (Int)
10.2 (Rat)
10000 (Num)
True (Bool)
ten (Str)
```

{% include nav.html %}