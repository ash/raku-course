---
title: Quiz — Parametri tipizzati
---

{% include menu.html %}

## 1

Data la funzione:

```raku
sub f(Rat $x) {
    say 2 * $x;
}
```

Quali chiamate sono corrette?

{:.quiz}
0 | f(3); | Anche se `3` può essere contenuto in un contenitore `Rat`, la chiamata è sbagliata poiché `3` è `Int`, non un `Rat`.
1 | f(3.5);
0 | f(3e0);
0 | f(&apos;3&apos;);
1 | f(<4/5>); | Questo è un numero `Rat`.


## 2

Data la funzione:

```raku
sub g(Int $a, Str $b) {
    say "Integer $a, string $b";
}
```

Quali chiamate sono corrette?

{:.quiz}
0 | g(10, 20);
0 | g(&apos;10&apos;, 20); | Anche se uno degli argomenti può essere convertito, Raku richiede il tipo esatto.
1 | g(10, &apos;20&apos;);
0 | g(&apos;10, 20&apos;); | Una singola stringa passata.
0 | g(&apos;10&apos;, &apos;20&apos;); 


{% include quiz.html %}

{% include nav.html %}