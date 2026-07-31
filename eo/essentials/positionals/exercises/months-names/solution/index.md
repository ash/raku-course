---
title: 'Solvo: Monataj nomoj'
---

{% include menu.html %}

En ĉi tiu programo, la nomoj de la monatoj estas prenitaj el la array `@months` kun dek du ŝnuroj en ĝi. Ĉar array-indeksoj komenciĝas per 0, ni devas malpligrandigi la enigan numeron per 1 antaŭ ol subscripting la array.

## Kodo

Jen la solvo:

```raku
my @months = <
    Januaro Februaro Marto Aprilo
    Majo Junio Julio Aŭgusto
    Septembro Oktobro Novembro Decembro
>;

say @months[@*ARGS[0] - 1];
```

🦋 Trovu la programon en la dosiero [months-names.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/months-names.raku).

## Eligo

Provu kelkajn ruladojn de la programo por vidi malsamajn nomojn de la monatoj.

```console
$ raku exercises/positionals/months-names.raku 5
Majo

$ raku exercises/positionals/months-names.raku 1
Januaro

$ raku exercises/positionals/months-names.raku 12
Decembro
```

## Stilo

Estas via elekto elekti unu el la eblaj manieroj formati la listojn kiel en ĉi tiu programo. Komparu kelkajn opciojn:

```raku
my @months = <
    Januaro Februaro Marto Aprilo
    Majo Junio Julio Aŭgusto
    Septembro Oktobro Novembro Decembro >;
```

Aŭ:

```raku
my @months = < Januaro   Februaro Marto    Aprilo
               Majo       Junio     Julio     Aŭgusto
               Septembro Oktobro  Novembro Decembro >;
```

Vi ankaŭ povas listigi ĉiujn monatojn en unu linio.

```raku
my @months = < Januaro Februaro Marto Aprilo Majo Junio Julio Aŭgusto Septembro Oktobro Novembro Decembro >;
```

{% include nav.html %}