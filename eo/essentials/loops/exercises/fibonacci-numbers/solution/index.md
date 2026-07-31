---
title: 'Solvo: Fibonacci-nombroj'
---

{% include menu.html %}

La sekva algoritmo difinas Fibonacci-nombrojn.

1. _F<sub>0</sub>_ = 0, _F<sub>0</sub>_ = 1
2. _F<sub>n</sub>_ = _F<sub>n-1</sub>_ + _F<sub>n-2</sub>_

## Kodo

La kodo efektivigas la algoritmon laŭlitere. Ĝi uzas kelkajn variablojn por konservi la nunajn du Fibonacci-nombrojn kaj ĝisdatigas ilin en buklo. Notu, ke ambaŭ variabloj estas ĝisdatigitaj [en unu sola asigno](/eo/essentials/scalar-variables/assigning-a-value/#multiple-assignment).

```raku
my $a = 0;
my $b = 1;

say $a;
for ^19 {
    ($a, $b) = $b, $a + $b;
    say $a;
}
```

🦋 Trovu la programon en la dosiero [fibonacci-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/fibonacci-numbers.raku).

## Eligo

Jen la eligo de la programo, kiu presas la unuajn 20 nombrojn.

```console
$ raku exercises/loops/fibonacci-numbers.raku
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
```

## Pli pri ĉi tiu temo

Memoru ĉi tiun taskon, ĉar ni revenos al ĝi en la estonteco por akiri alian ekscitan solvon kun Raku _sekvencoj_.

{% include nav.html %}