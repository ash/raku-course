---
title: 'Solutio: Codices Nationum'
---

{% include menu.html %}

In hoc programmate, conversio codicis ad nomen fit per quaestionem hash `%cc{$_}` in circulo super `@codes` array.

## Codex

Hic est solutio possibilis (non omnes nationes ostenduntur):

```raku
my %cc =
    AD => 'Andorra',
    AE => 'Emiratus Arabes Uniti',

    # . . .

    ZM => 'Zambia',
    ZW => 'Zimbabvia'
;

my @codes = < FR IT DE EE LV US CN IN BR >;

dic %cc{$_} pro @codes;
```

🦋 Inveni programmatum in archivo [country-codes.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/country-codes.raku).

## Output

Pro datis codicibus input, programma sequens indicem nationum imprimit:

```console
$ raku exercises/associatives/country-codes.raku
Francia
Italia
Germania
Estonia
Lettonia
Civitates Foederatae Americae
Sina
India
Brasilia
```

{% include nav.html %}