---
title: 'Solvo: Mola reciproko'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub reciprocal($n) {
    fail 'no reciprocal of zero' if $n == 0;
    return 1 / $n;
}

say reciprocal(4);
say reciprocal(0) // 'undefined';
```

🦋 Vi povas trovi la fontkodon en la dosiero [soft-divide.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/soft-divide.raku).

## Eligo

```
0.25
undefined
```

## Komentoj

1. `reciprocal(4)` redonas `1 / 4`, tio estas `0.25`, normale.

1. `reciprocal(0)` vokas `fail`, do ĝi redonas `Failure`, kiu estas nedifinita. La operatoro `//` redonas sian dekstran flankon, kiam ajn la maldekstra flanko estas nedifinita, do ni ricevas la retiriĝon `undefined`.

1. Uzi `//` kalkuliĝas kiel trakti la misfunkcion: ĝi testas difinitecon sen uzi la valoron, do la `Failure` restas mola kaj neniam estas ĵetata kiel vera escepto.

{% include nav.html %}
