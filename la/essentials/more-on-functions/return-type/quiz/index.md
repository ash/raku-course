---
title: Quiz — Functiones cum valoribus defaltis
---

{% include menu.html %}

Est functio:

```raku
sub add(Int $x, Int $y) returns Int {
    $x + $y
}
```

Reprehende quae ex sequentibus assignationibus operabuntur.

{:.quiz}
1 | my $a = add(4, 6); | Assignatio ad variabilem non typatum operatur.
0 | my Rat $b = add(5, 6); | Valor `Int` non potest assignari variabili typi `Rat`.
1 | my Int $c = add(7, 8);
0 | my Num $d = add(9, 10);
1 | my Str $e = add(9, 10).Str; | Conversio typi explicita adiuvat.
0 | my Str $f = add(9, 10);

{% include quiz.html %}

{% include nav.html %}