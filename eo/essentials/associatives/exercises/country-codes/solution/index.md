---
title: 'Solvo: Lando kodoj'
---

{% include menu.html %}

En ĉi tiu programo, konverti kodon al nomo estas farita kiel haketa serĉo `%cc{$_}` en buklo super la `@codes` arrayo.

## Kodo

Jen la ebla solvo (ne ĉiuj landoj estas montritaj):

```raku
my %cc =
    AD => 'Andoro',
    AE => 'Unuiĝintaj Arabaj Emirlandoj',

    # . . .

    ZM => 'Zambio',
    ZW => 'Zimbabvo'
;

my @codes = < FR IT DE EE LV US CN IN BR >;

say %cc{$_} for @codes;
```

🦋 Trovu la programon en la dosiero [country-codes.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/country-codes.raku).

## Eligo

Por la donitaj eniraj kodoj, la programo presas la sekvan liston de landoj:

```console
$ raku exercises/associatives/country-codes.raku
Francio
Italio
Germanio
Estonio
Latvio
Unuiĝintaj Ŝtatoj de Ameriko
Ĉinio
Hindio
Brazilo
```

{% include nav.html %}