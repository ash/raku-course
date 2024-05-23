---
title: Solvo de 'Interŝanĝu la valorojn'
---

{% include menu.html %}

En ĉi tiu programo, ni uzas la elementojn de Raku-sintakso el la sekcio pri [skalaj variabloj](/eo/essentials/scalar-variables).

## Kodo

```raku
my ($a, $b) = 10, 20;
($a, $b) = $b, $a;
say "$a, $b";
```

🦋 Vi povas trovi la fontokodon en la dosiero [swap.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/swap.raku).

## Eligo

Rulu la programon kaj konfirmu ke ĝi presas la valorojn en malsama ordo.

```console
$ raku exercises/scalar-variables/swap.raku
20, 10
```

## Komentoj

Ĉiuj paŝoj de ĉi tiu programo (kreado de variablo kaj asignado de la valoroj, interŝanĝo de ili, kaj presado) uzas ambaŭ variablojn en la sama konstruo. La plej interesa ĉi tie estas la maniero kiel la variabloj interŝanĝas siajn valorojn:

```raku
($a, $b) = $b, $a;
```

Notu ke vi bezonas krampojn ĉe la maldekstra flanko, sed vi ankaŭ povas aldoni ilin ĉe la dekstra flanko:

```raku
($a, $b) = ($b, $a);
```

Kio okazas se vi preterlasas krampojn?

```raku
$a, $b = $b, $a;
```

En ĉi tiu kazo, vi ricevas averton ke `$a` ĉe la dekstra flanko ne estas uzata:

```
$ raku exercises/scalar-variables/swap.raku
AVERTOJ por /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Senzaŭza uzo de $a en sink-kunteksto (linioj 2, 2)
10, 20
```

La supra linio estas fakte ekvivalenta al senutila asigno `$b = $b`. Vi povas facile vidi ĝin se vi modifas la valorojn ĉe la dekstra flanko, ekzemple:

```raku
$a, $b = 2 * $b, 3 * $a;
```

Ĉi tiu programo presas eĉ pli da avertoj, sed vi ankaŭ povas vidi ke nur `$b` ŝanĝis sian valoron:

```
$ raku exercises/scalar-variables/swap.raku
AVERTOJ por /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Senzaŭza uzo de "*" en esprimo "3 * $a" en sink-kunteksto (linio 2)
Senzaŭza uzo de $a en sink-kunteksto (linio 2)
10, 40
```

{% include nav.html %}