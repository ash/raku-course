---
title: 'Solvo: Rekursiva faktorialo'
---

{% include menu.html %}

Faktorialo estas tre produktiva ekzerco, ĉar ĝi povas esti solvita per diversaj manieroj. Ĉi-foje ni uzas rekursion, kio signifas ke la funkcio estas vokita de si mem.

## Kodo 1

Jen la kodo de la solvo. Rimarku, ke vi devas kontroli la kondiĉon por halti la rekursion, alie ĝi daŭros senfine.

```raku
sub factorial($n) {
    if $n < 2 {
        return 1;
    }
    else {
        return $n * factorial($n - 1);
    }
}

say factorial(10);
```

🦋 Trovu la programon en la dosiero [recursive-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/recursive-factorial.raku).

## Kodo 2

En la kazoj, kiel montrite en ĉi tiu kodo, ofte estas pli bone uzi postfiksajn formojn de `if` por tuj reveni de la funkcio. Ĉi tiu aliro klarigas la kodon kaj forigas multan enmetadon kaj interpunkcion.

```raku
sub factorial($n) {
    return 1 if $n < 2;
    return $n * factorial($n - 1);
}

say factorial(10);
```

🦋 Trovu la ĝisdatigitan programon en la dosiero [recursive-factorial-2.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/recursive-factorial-2.raku).

## Ekzemplo

Rulu la programon kaj kontrolu la rezulton. Cetere, ĉu vi sciis, ke _10!_ estas la ĝusta nombro de sekundoj en ses semajnoj?

```console
$ raku exercises/functions/recursive-factorial.raku
3628800
```

{% include nav.html %}