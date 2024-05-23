---
title: 'Solutio: FizzBuzz'
---

{% include menu.html %}

Hoc munus est classica quaestio colloquii quae adiuvat ad cognoscendum si de casibus cogitas ubi ambae condiciones `Verum` sunt. Si numerus est divisibilis tam per 3 quam per 5, programma debet imprimere `FizzBuzz`.

## Codex

Hic est solutio:

```raku
my $n = prompt 'Numerum intra: ';

print 'Fizz' si $n %% 3;
print 'Buzz' si $n %% 5;
print "\n";
```

🦋 Inveni programma in archivo [fizz-buzz.raku](https://github.com/ash/raku-course/blob/master/exercises/exercises/conditional-checks/fizz-buzz.raku).

## Exemplum

Necesse est ut paucos classes inputorum data probare:

* Numeri divisibiles per 3, e.g.: 3, 6, 9, 12.
* Numeri divisibiles per 5, e.g.: 5, 10, 15, 20.
* Numeri divisibiles tam per 3 quam per 5, e.g.: 15, 30, 45.
* Alii numeri, qui nec per 3 nec per 5 divisibiles sunt, e.g.: 4, 7, 11.

```console
$ raku exercises/conditional-checks/fizz-buzz.raku 
Numerum intra: 3
Fizz

$ raku exercises/conditional-checks/fizz-buzz.raku
Numerum intra: 10
Buzz

$ raku exercises/conditional-checks/fizz-buzz.raku
Numerum intra: 7

$ raku exercises/conditional-checks/fizz-buzz.raku
Numerum intra: 30
FizzBuzz
```

{% include nav.html %}