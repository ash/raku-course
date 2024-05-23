---
title: 'Solvo: FizzBuzz'
---

{% include menu.html %}

Ĉi tiu tasko estas klasika intervjuo-tasko kiu helpas kontroli ĉu vi konsideras la kazojn kiam ambaŭ kondiĉoj estas `Vera`. Se la nombro estas dividebla per kaj 3 kaj 5, la programo devus presi `FizzBuzz`.

## Kodo

Jen la solvo:

```raku
my $n = prompt 'Enigu numeron: ';

print 'Fizz' se $n %% 3;
print 'Buzz' se $n %% 5;
print "\n";
```

🦋 Trovu la programon en la dosiero [fizz-buzz.raku](https://github.com/ash/raku-course/blob/master/exercises/exercises/conditional-checks/fizz-buzz.raku).

## Ekzemplo

Vi bezonas testi kelkajn klasojn de eniraj datumoj:

* La nombroj divideblaj per 3, ekz.: 3, 6, 9, 12.
* La nombroj divideblaj per 5, ekz.: 5, 10, 15, 20.
* La nombroj divideblaj per 3 kaj per 5, ekz.: 15, 30, 45.
* Aliaj nombroj, kiuj ne estas divideblaj per nek 3 nek 5, ekz.: 4, 7, 11.

```console
$ raku exercises/conditional-checks/fizz-buzz.raku 
Enigu numeron: 3
Fizz

$ raku exercises/conditional-checks/fizz-buzz.raku
Enigu numeron: 10
Buzz

$ raku exercises/conditional-checks/fizz-buzz.raku
Enigu numeron: 7

$ raku exercises/conditional-checks/fizz-buzz.raku
Enigu numeron: 30
FizzBuzz
```

{% include nav.html %}