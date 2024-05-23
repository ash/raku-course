---
title: Solvo al ‘Klasaj skribotabloj’
---

{% include menu.html %}

La solvo al la problemo estas montrita sube.

## Kodo

```raku
my $students = 23;

my $desks = $students div 2 + $students % 2;

say "$desks desks must be bought.";
```

🦋 Vi povas trovi la plenan kodon en la dosiero [class-desks.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/class-desks.raku).

## Eligo

Rulu la programon almenaŭ dufoje provante ambaŭ neparan kaj paran nombron de studentoj. Ekzemple, por la eniraj nombroj `23` kaj `24`, la programo presas la saman rezulton:

```console
$ raku exercises/numbers/class-desks.raku
12 desks must be bought.
```

## Komentoj

Ne sufiĉas nur dividi la nombron de studentoj per du. Gravas trakti ambaŭ neparajn kaj parajn nombrojn. Unu el la eblaj solvoj por rondigi la nombron supren: `$students div 2 + $students % 2`. Kiam la nombro de studentoj estas para, la dua komponento estas nulo, kaj la rezulto estas egala al duono de la nombro de studentoj. Sed kiam la nombro de studentoj estas nepara, la unua komponento estas ankoraŭ entjera nombro pro `div` anstataŭ `/`, kaj la dua termino de la esprimo aldonas ekstran skribotablon.

{% include nav.html %}