---
title: 'Solutio: FizzBuzz in ansa'
---

{% include menu.html %}

Hoc tempore, divisibilitatis verificatio fit in circulo. Pro directo imprimendo, phrasis primum accumulatur in variabili separata et postea interpolatur in chorda.

## Codex

Hic est nova solutio:

```raku
for 1..50 -> $n {
    my $fizzbuzz = '';
    $fizzbuzz ~= 'Fizz' if $n %% 3;
    $fizzbuzz ~= 'Buzz' if $n %% 5;
    say "$n: $fizzbuzz";
}
```

🦋 Inveni codicem fontem in archivo [fizbuzz-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/fizbuzz-loop.raku).

## Exitus

```console
$ raku exercises/loops/fizbuzz-loop.raku
```

## Commentarium

Pro solutore problematum pedantico, solutio fortasse non sit perfecta, quia imprimit spatium post colon etiam pro illis numeris, qui nullum Fizz aut Buzz habent. Modifica programma ut hoc vitetur.

{% include nav.html %}