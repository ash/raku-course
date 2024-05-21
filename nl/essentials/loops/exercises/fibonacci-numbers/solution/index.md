---
title: Oplossing van 'Fibonacci-getallen'
---

{% include menu.html %}

Het volgende algoritme definieert Fibonacci-getallen.

1. _F<sub>0</sub>_ = 0, _F<sub>0</sub>_ = 1
2. _F<sub>n</sub>_ = _F<sub>n-1</sub>_ + _F<sub>n-2</sub>_

## Code

De code implementeert het algoritme letterlijk. Het gebruikt een paar variabelen om de huidige twee Fibonacci-getallen bij te houden en werkt ze bij in een lus. Merk op dat beide variabelen worden bijgewerkt [in een enkele toewijzing](/nl/essentials/scalar-variables/assigning-a-value/#multiple-assignment).

```raku
my $a = 0;
my $b = 1;

say $a;
for ^19 {
    ($a, $b) = $b, $a + $b;
    say $a;
}
```

🦋 Vind het programma in het bestand [fibonacci-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/fibonacci-numbers.raku).

## Uitvoer

Hier is de uitvoer van het programma dat de eerste 20 getallen afdrukt.

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

## Meer over dit onderwerp

Onthoud deze taak, want we zullen er in de toekomst op terugkomen om een andere spannende oplossing met Raku _sequences_ te krijgen.

{% include nav.html %}