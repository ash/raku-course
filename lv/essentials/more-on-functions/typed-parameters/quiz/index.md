---
title: Viktorīna — Tipizēti parametri
---

{% include menu.html %}

## 1

Ņemot vērā funkciju:

```raku
sub f(Rat $x) {
    say 2 * $x;
}
```

Kuri izsaukumi ir pareizi?

{:.quiz}
0 | f(3); | Pat ja `3` var ietilpt `Rat` konteinerā, izsaukums ir nepareizs, jo `3` ir `Int`, nevis `Rat`.
1 | f(3.5);
0 | f(3e0);
0 | f(&apos;3&apos;);
1 | f(<4/5>); | Tas ir `Rat` skaitlis.


## 2

Ņemot vērā funkciju:

```raku
sub g(Int $a, Str $b) {
    say "Integer $a, string $b";
}
```

Kuri izsaukumi ir pareizi?

{:.quiz}
0 | g(10, 20);
0 | g(&apos;10&apos;, 20); | Pat ja jebkurš arguments var tikt pārveidots, Raku pieprasa precīzu tipu.
1 | g(10, &apos;20&apos;);
0 | g(&apos;10, 20&apos;); | Pārsūtīta viena virkne.
0 | g(&apos;10&apos;, &apos;20&apos;); 


{% include quiz.html %}

{% include nav.html %}