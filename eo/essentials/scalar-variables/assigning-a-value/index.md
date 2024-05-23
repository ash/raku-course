---
title: Atribuado de valoro
---

{% include menu.html %}

Uzu la operatoron `=` por meti novan valoron en skalaran ujon.

```raku
my $nomo;
$nomo = 'Anna';
```

Vi nun povas uzi la variablon kaj, ekzemple, presi ĝin:

```raku
say $nomo;
```

## Multoblaj atribuoj

Multoblaj variabloj povas esti atribuitaj samtempe. Ekzemple, jen kiel atribui du skalarojn en unu sola deklaro:

```raku
my ($a, $b);
($a, $b) = 10, 20;
```

Rimarku, ke vi ne povas preterlasi la parentezojn ĉe la maldekstra flanko. Sed vi povas aldoni ilin por simetrio ĉe la dekstra flanko:

```raku
($a, $b) = (10, 20);
```

{% include nav.html %}