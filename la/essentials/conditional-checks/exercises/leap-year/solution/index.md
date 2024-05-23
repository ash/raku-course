---
title: 'Solutio: Annus bissextilis'
---

{% include menu.html %}

## Disclaimer

Solutio infra proposita intendit te exercere utendo conditionibus. In vita reali, potes discere methodos classis `Date` in-builtae. Hoc discemus in secunda parte cursus.

## Solutio

Algorithmus detectionis si annus est bissextilis:

1. si annus non est divisibilis per 4 => annus communis
1. si annus non est divisibilis per 100 => annus bissextilis
1. si annus non est divisibilis per 400 => annus communis
1. aliter => annus bissextilis

Nota quod potes uti typis in-builta ad operandum cum data et tempore, itaque ad hanc quaestionem redibimus in secunda parte cursus.

## Codex 1

Prima solutio reproduciit gradus supra litteratim:

```raku
my $year = prompt 'Annus: ';

if $year % 4 {
    say 'Annus communis';
}
elsif $year % 100 {
    say 'Annus bissextilis';
}
elsif $year % 400 {
    say 'Annus communis';
}
else {
    say 'Annus bissextilis';
}
```

🦋 Inveni programmam in archivo [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/leap-year.raku).

## Codex 2

In secunda solutione, logica compacta est in unam expressionem. Parentheses non semper necessariae sunt sed hic additae sunt pro claritate.

```raku
my $year = prompt 'Annus: ';

say (($year %% 400) || (($year %% 4) && ($year % 100))) ?? 'Annus bissextilis' !! 'Annus communis';
```

🦋 Inveni programmam in archivo [leap-year-formula.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/leap-year-formula.raku).

## Output

Experire utrumque programma cum casibus criticis, exempli gratia, 1900, 2000, 2020, 2021.

```console
$ raku exercises/conditional-checks/leap-year.raku
Annus: 1900
Annus communis

$ raku exercises/conditional-checks/leap-year.raku
Annus: 2000
Annus bissextilis
```

```console
$ raku exercises/conditional-checks/leap-year-formula.raku
Annus: 2020
Annus bissextilis

$ raku exercises/conditional-checks/leap-year-formula.raku
Annus: 2021
Annus communis
```

%%tipblock
## `%%` vs `%`

Nota quod in contextibus Booleanis, operatores `%%` et `%` sunt complementarii. Potes uti hoc facto ad eligendum unum ex operatoribus ad vitandum explicitum comparationem cum zero.

```raku
say ?(100 % 3);    # Verum
say 100 % 3 != 0;  # Verum

say ?(100 %% 3);   # Falsum
say 100 %% 3 != 0; # Falsum
```
%%/tipblock

{% include nav.html %}