---
title: Solutio 'Numerorum Fibonacci'
---

{% include menu.html %}

Algorithmus sequens numeros Fibonacci definit.

1. _F<sub>0</sub>_ = 0, _F<sub>0</sub>_ = 1
2. _F<sub>n</sub>_ = _F<sub>n-1</sub>_ + _F<sub>n-2</sub>_

## Codex

Codex algorithmum litteratim implet. Utiur duobus variabilibus ad numeros Fibonacci actuales conservandos et eos in circulo renovat. Nota quod ambo variabiles renovantur [in una assignatione](/la/essentials/scalar-variables/assigning-a-value/#multiple-assignment).

```raku
my $a = 0;
my $b = 1;

say $a;
for ^19 {
    ($a, $b) = $b, $a + $b;
    say $a;
}
```

🦋 Invenias programmatum in archivo [fibonacci-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/fibonacci-numbers.raku).

## Output

Hic est exitus programmatis qui primos viginti numeros imprimit.

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

## Plura de hoc argumento

Memor esto huius operis ut ad id redeamus in futuro ad aliam solutionem excitantem cum Raku _sequentiis_ obtinendam.

{% include nav.html %}