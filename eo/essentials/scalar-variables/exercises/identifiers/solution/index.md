---
title: 'Solvo: Korekti la identigilojn'
---

{% include menu.html %}

Estas pli ol unu maniero fari la identigilojn ĝustaj. Kelkaj eblaj opcioj estas montritaj ĉi tie:

## Kodo

```raku
my $AGE = 30;
my $Name = 'Valdis';
my $Middle'Name = 'C.';
my $address2 = 'Second street, 12';
my $from-to = 'London to Paris';
```

Ĉiuj identigiloj estas validaj, sed verŝajne estas pli bone eviti nomojn kun apostrofoj se vi `$don't` havas fortajn kialojn por uzi ilin.

🦋 Vi povas trovi la fontkodon en la dosiero [identifiers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/scalar-variables/identifiers.raku).

## Eligo

Ĉi tiu programo ne generas ajnan eligon, sed vi ne devus ricevi erarojn kiam Rakudo kompilas kaj rulas ĝin:

```console
$ raku exercises/scalar-variables/identifiers.raku
```

## Komentoj

Ni listigu la problemojn kun la originalaj nomoj:

1. Spacoj ne estas permesitaj: `$ A G E`.
1. Variablo bezonas sigilon: `Name` (estas eble havi variablojn sen sigilo en Raku, sed ili ankoraŭ ne povas esti deklaritaj kiel `my Name`).
1. Apostrofo (fakte unuopa citilo) ne povas komenci nomon: `$'Middle'Name`.
1. Cifero ankaŭ ne povas komenci nomon: `$2address`.
1. Du streketo ne povas sidi kune: `$from--to`.

{% include nav.html %}