---
title: 'Solvo: FizzBuzz en buklo'
---

{% include menu.html %}

Ĉi-foje, la dividebleco-kontrolo okazas en buklo. Anstataŭ rekta presado, la frazo unue estas akumulita en aparta variablo kaj poste interpolita en ŝnuro.

## Kodo

Jen la nova solvo:

```raku
for 1..50 -> $n {
    my $fizzbuzz = '';
    $fizzbuzz ~= 'Fizz' if $n %% 3;
    $fizzbuzz ~= 'Buzz' if $n %% 5;
    say "$n: $fizzbuzz";
}
```

🦋 Trovu la programon en la dosiero [fizbuzz-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/fizbuzz-loop.raku).

## Eligo

```console
$ raku exercises/loops/fizbuzz-loop.raku
```

## Komento

Por pedanta problemo-solvanto, la solvo eble ne estas perfekta ĉar ĝi presas spacon post la dupunkto eĉ por tiuj nombroj, kiuj ne ricevis ajnan Fizz aŭ Buzz. Modifu la programon por eviti tiun problemon.

{% include nav.html %}