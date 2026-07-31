---
title: 'Solvo: Pluralfinaĵo'
---

{% include menu.html %}

La programo devus kontroli ĉu la enirita nombro estas pli granda ol unu kaj meti ĝin en la pluralan formon.

## Kodo

```raku
my $n = prompt 'Kiom da dosieroj kopii? ';
my $ending = $n == 1 ?? '' !! 'j';
say "$n dosiero{$ending} kopiita.";
```

🦋 Trovu la programon en la dosiero [plural-ending.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/plural-ending.raku).

## Eligo

Rulu la programon almenaŭ dufoje kaj testu ĝin kun la enigo `1` kaj kun ajna alia pozitiva entjero:

```console
$ raku exercises/conditional-checks/plural-ending.raku
Kiom da dosieroj kopii? 10
10 dosieroj kopiitaj.

$ raku exercises/conditional-checks/plural-ending.raku
Kiom da dosieroj kopii? 1
1 dosiero kopiita.
```

## Komento

Vi eble, probable, emas erare tajpi unuopan `?` anstataŭ duoblan `??` kaj/aŭ dupunkton `:` anstataŭ `!!`.

{% include nav.html %}