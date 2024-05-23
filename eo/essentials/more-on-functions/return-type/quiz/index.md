---
title: Kvizo — Funkcioj kun defaŭltaj valoroj
---

{% include menu.html %}

Estas funkcio:

```raku
sub add(Int $x, Int $y) returns Int {
    $x + $y
}
```

Kontrolu kiuj el la sekvaj asignoj funkcios.

{:.quiz}
1 | my $a = add(4, 6); | Asigni al netipigita variablo funkcias.
0 | my Rat $b = add(5, 6); | `Int` valoro ne povas esti asignita al `Rat` tipigita variablo.
1 | my Int $c = add(7, 8);
0 | my Num $d = add(9, 10);
1 | my Str $e = add(9, 10).Str; | Eksplika tipokonverto helpas.
0 | my Str $f = add(9, 10);

{% include quiz.html %}

{% include nav.html %}