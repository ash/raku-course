---
title: Quiz — Typed parameters
---

{% include menu.html %}

## 1

Given the function:

```raku
sub f(Rat $x) {
    say 2 * $x;
}
```

Which calls are correct?

{:.quiz}
0 | f(3); | Etiamsi `3` in continens `Rat` convenire potest, vocatio falsa est quia `3` est `Int`, non `Rat`.
1 | f(3.5);
0 | f(3e0);
0 | f(&apos;3&apos;);
1 | f(<4/5>); | Hoc est numerus `Rat`.


## 2

Given the function:

```raku
sub g(Int $a, Str $b) {
    say "Integer $a, string $b";
}
```

Which calls are correct?

{:.quiz}
0 | g(10, 20);
0 | g(&apos;10&apos;, 20); | Etiamsi utrumque argumentum converti potest, Raku exactum genus postulat.
1 | g(10, &apos;20&apos;);
0 | g(&apos;10, 20&apos;); | Una stringa praeterita.
0 | g(&apos;10&apos;, &apos;20&apos;); 


{% include quiz.html %}

{% include nav.html %}