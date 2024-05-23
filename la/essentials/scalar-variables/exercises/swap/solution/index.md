---
title: Solutio 'Valorum Permutatio'
---

{% include menu.html %}

In hoc programmate, elementa syntaxis Raku ex sectione de [variabilibus scalaribus](/la/essentials/scalar-variables) utimur.

## Codex

```raku
my ($a, $b) = 10, 20;
($a, $b) = $b, $a;
say "$a, $b";
```

🦋 Codicem fontis invenire potes in fasciculo [swap.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/swap.raku).

## Effectus

Programma currite et confirmate valores in ordine diverso imprimi.

```console
$ raku exercises/scalar-variables/swap.raku
20, 10
```

## Commentarii

Omnes gradus huius programmatis (creatio variabilis et assignatio valorum, permutatio eorum, et impressio) utuntur utraque variabili in eadem constructione. Maxime interesting hic est modus quo variabiles valores suos permutant:

```raku
($a, $b) = $b, $a;
```

Nota quod parenthesibus in latere sinistro opus est, sed etiam eas in latere dextro addere potes:

```raku
($a, $b) = ($b, $a);
```

Quid accidit si parenthesibus omittas?

```raku
$a, $b = $b, $a;
```

In hoc casu, monitionem accipis quod `$a` in latere dextro non adhibetur:

```
$ raku exercises/scalar-variables/swap.raku
MONITIONES pro /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Inutilis usus $a in contextu sink (lineae 2, 2)
10, 20
```

Linea supra re vera aequipollet inutili assignationi `$b = $b`. Facile videre potes si valores in latere dextro modifies, exempli gratia:

```raku
$a, $b = 2 * $b, 3 * $a;
```

Hoc programma plures monitiones imprimit, sed etiam videre potes solum `$b` valorem suum mutasse:

```
$ raku exercises/scalar-variables/swap.raku
MONITIONES pro /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Inutilis usus "*" in expressione "3 * $a" in contextu sink (linea 2)
Inutilis usus $a in contextu sink (linea 2)
10, 40
```

{% include nav.html %}