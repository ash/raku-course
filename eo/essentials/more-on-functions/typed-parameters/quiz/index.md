---
title: Kvizo — Tajpitaj parametroj
---

{% include menu.html %}

## 1

Donita la funkcio:

```raku
sub f(Rat $x) {
    say 2 * $x;
}
```

Kiuj vokoj estas ĝustaj?

{:.quiz}
0 | f(3); | Eĉ se `3` povas eniri en `Rat` ujo, la voko estas malĝusta ĉar `3` estas `Int`, ne `Rat`.
1 | f(3.5);
0 | f(3e0);
0 | f(&apos;3&apos;);
1 | f(<4/5>); | Ĉi tio estas `Rat` nombro.


## 2

Donita la funkcio:

```raku
sub g(Int $a, Str $b) {
    say "Integer $a, string $b";
}
```

Kiuj vokoj estas ĝustaj?

{:.quiz}
0 | g(10, 20);
0 | g(&apos;10&apos;, 20); | Eĉ se ĉiu argumento povas esti kastita, Raku postulas la ĝustan tipon.
1 | g(10, &apos;20&apos;);
0 | g(&apos;10, 20&apos;); | Unuopa ŝnuro pasita.
0 | g(&apos;10&apos;, &apos;20&apos;); 


{% include quiz.html %}

{% include nav.html %}