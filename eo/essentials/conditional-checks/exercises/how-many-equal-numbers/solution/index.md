---
title: 'Solvo: Kiom da nombroj estas egalaj?'
---

{% include menu.html %}

La programo devus fari kelkajn komparojn. Por tri eniraj nombroj, estas du eblaj kazoj:

1. Ĉiuj tri nombroj estas egalaj,
1. Nur du nombroj estas egalaj, kaj
1. Ĉiuj nombroj estas malsamaj.

## Kodo

Jen la solvo kun eksplicitaj komparoj.

```raku
my $n1 = prompt 'Enigu numeron 1: ';
my $n2 = prompt 'Enigu numeron 2: ';
my $n3 = prompt 'Enigu numeron 3: ';

if $n1 == $n2 == $n3 {
    say 3;
}
elsif $n1 == $n2 || $n2 == $n3 || $n1 == $n3 {
    say 2;
}
else {
    say 0;
}
```

🦋 Trovu la programon en la dosiero [how-many-equal-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/how-many-equal-numbers.raku).

## Eligo

```console
$ raku exercises/conditional-checks/how-many-equal-numbers.raku 0 0 0
Enigu numeron 1: 14
Enigu numeron 2: 8
Enigu numeron 3: 8
2

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Enigu numeron 1: 15
Enigu numeron 2: 15
Enigu numeron 3: 15
3

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Enigu numeron 1: 4
Enigu numeron 2: 6
Enigu numeron 3: 8
0
```

## Komentoj

1. Notu, ke vi povas kompari tri nombrojn en unu sola esprimo: `$n1 == $n2 == $n3`.
1. Revenu al ĉi tiu tasko kaj solvu ĝin denove post lernado pri la redukta operatoro.

{% include nav.html %}