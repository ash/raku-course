---
title: Quiz — Getypte parameters
---

{% include menu.html %}

## 1

Gegeven de functie:

```raku
sub f(Rat $x) {
    say 2 * $x;
}
```

Welke aanroepen zijn correct?

{:.quiz}
0 | f(3); | Zelfs als `3` in een `Rat` container kan passen, is de aanroep fout omdat `3` een `Int` is, geen `Rat`.
1 | f(3.5);
0 | f(3e0);
0 | f('3');
1 | f(<4/5>); | Dit is een `Rat` getal.


## 2

Gegeven de functie:

```raku
sub g(Int $a, Str $b) {
    say "Integer $a, string $b";
}
```

Welke aanroepen zijn correct?

{:.quiz}
0 | g(10, 20);
0 | g('10', 20); | Zelfs als een van beide argumenten kan worden gecast, eist Raku het exacte type.
1 | g(10, '20');
0 | g('10, 20'); | Een enkele string doorgegeven.
0 | g('10', '20'); 


{% include quiz.html %}

{% include nav.html %}