---
title: 'Solutio: Nomina Mensium'
---

{% include menu.html %}

In hoc programmate, nomina mensium ex serie `@months` cum duodecim chordis sumuntur. Cum indices seriei a 0 incipiant, necesse est numerum inputatum per 1 minuere antequam seriem subscriptamus.

## Codex

Hic est solutio:

```raku
my @months = <
    Ianuarius Februarius Martius Aprilis
    Maius Iunius Iulius Augustus
    September October November December
>;

say @months[@*ARGS[0] - 1];
```

🦋 Invenias programma in archivo [months-names.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/months-names.raku).

## Output

Experire aliquot cursus programmatis ut diversa nomina mensium videas.

```console
$ raku exercises/positionals/months-names.raku 5
Maius

$ raku exercises/positionals/months-names.raku 1
Ianuarius

$ raku exercises/positionals/months-names.raku 12
December
```

## Stilus

Tibi eligendum est unum ex modis possibilibus ad formandas series sicut in hoc programmate. Compara aliquot optiones:

```raku
my @months = <
    Ianuarius Februarius Martius Aprilis
    Maius Iunius Iulius Augustus
    September October November December >;
```

Vel:

```raku
my @months = < Ianuarius Februarius Martius Aprilis
               Maius Iunius Iulius Augustus
               September October November December >;
```

Potes etiam omnes menses in una linea enumerare.

```raku
my @months = < Ianuarius Februarius Martius Aprilis Maius Iunius Iulius Augustus September October November December >;
```

{% include nav.html %}