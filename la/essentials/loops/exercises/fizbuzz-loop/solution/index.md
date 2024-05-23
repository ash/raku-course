---
title: 'Solutio: FizzBuzz in circulo'
---

{% include menu.html %}

Hoc tempore, divisibilitatis verificatio fit in circulo. Pro directo imprimendo, phrasis primum accumulatur in variabili separata et postea interpolatur in chorda.

## Codex

Hic est nova solutio:

```raku
for 1..50 -> $n {
    my $fizzbuzz = '';
    $fizzbuzz ~= 'Fizz' si $n %% 3;
    $fizzbuzz ~= 'Buzz' si $n %% 5;
    dic "$n: $fizzbuzz";
}
```

🦋 Inveni programma in archivo [fizbuzz-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/fizbuzz-loop.raku).

## Effectus

```console
$ raku exercises/loops/fizbuzz-loop.raku
```

## Commentarium

Pro solutore problematum pedantico, solutio fortasse non sit perfecta, quia imprimit spatium post colon etiam pro illis numeris, qui nullum Fizz aut Buzz habent. Modifica programma ut hoc vitetur.

{% include nav.html %}