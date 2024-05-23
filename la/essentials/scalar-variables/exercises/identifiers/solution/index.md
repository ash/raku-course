---
title: Solutio 'Corrige Identificatores'
---

{% include menu.html %}

Plures modi sunt ad identificatores corrigendos. Hic nonnullae optiones possibiles monstrantur:

## Codex

```raku
my $AGE = 30;
my $Name = 'Valdis';
my $Middle'Name = 'C.';
my $address2 = 'Second street, 12';
my $from-to = 'London to Paris';
```

Omnes identificatores sunt validi, sed fortasse melius est vitare nomina cum apostrophis si `$non` habes validas rationes ad eos utendos.

🦋 Codicem fontem invenire potes in archivo [identifiers.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/identifiers.raku).

## Output

Hoc programma nullum output generat, sed non debes errores accipere cum Rakudo illud compilat et exsequitur:

```console
$ raku exercises/scalar-variables/identifiers.raku
```

## Commentarii

Enumeremus problemata cum nominibus originalibus:

1. Spatia non permittuntur: `$ A G E`.
1. Variabilis sigillum requirit: `Name` (possibile est habere variabiles sine sigillo in Raku, sed tamen non possunt declarari ut `my Name`).
1. Apostrophus (revera singula comma) non potest nomen incipere: `$'Middle'Name`.
1. Digitus non potest nomen incipere: `$2address`.
1. Duo hyphena non possunt simul sedere: `$from--to`.

{% include nav.html %}