---
title: Quiz — Typisierte Parameter
---

{% include menu.html %}

## 1

Gegeben die Funktion:

```raku
sub f(Rat $x) {
    say 2 * $x;
}
```

Welche Aufrufe sind korrekt?

{:.quiz}
0 | f(3); | Auch wenn `3` in einen `Rat`-Container passt, ist der Aufruf falsch, da `3` ein `Int` und kein `Rat` ist.
1 | f(3.5);
0 | f(3e0);
0 | f(&apos;3&apos;);
1 | f(<4/5>); | Dies ist eine `Rat`-Zahl.


## 2

Gegeben die Funktion:

```raku
sub g(Int $a, Str $b) {
    say "Integer $a, string $b";
}
```

Welche Aufrufe sind korrekt?

{:.quiz}
0 | g(10, 20);
0 | g(&apos;10&apos;, 20); | Auch wenn beide Argumente umgewandelt werden können, verlangt Raku den exakten Typ.
1 | g(10, &apos;20&apos;);
0 | g(&apos;10, 20&apos;); | Ein einzelner String übergeben.
0 | g(&apos;10&apos;, &apos;20&apos;); 


{% include quiz.html %}

{% include nav.html %}