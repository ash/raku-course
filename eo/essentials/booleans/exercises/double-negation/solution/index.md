---
title: Solvo al 'Duobla neado’
---

{% include menu.html %}

Ni etendu la programon por solvi la duan parton de la ekzerco kaj reuzi la saman variablon:

## Kodo

```raku
my $value = False;
say !!$value;

$value = True;
say !!$value;
```

🦋 Vi povas trovi la plenan kodon en la dosiero [double-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/double-negation.raku).

## Komentoj

Antaŭ ol ruli la programon, ni pensu kion ĝi presos. Estas du neado-operatoroj antaŭ la variablo. Ili agas kiel du neado-operatoroj. En la unua kazo, la valoro estas ŝanĝita de `False` al `True`, kaj tiam tuj ŝanĝita reen de `True` al `False`. En la dua kazo, la algoritmo estas la sama: post du neadoj, ni ricevas la komencan Boole-an valoron.

## Eligo

La programo presas la sekvan eligon, kiu konfirmas la supre menciitajn konsiderojn:

```console
$ raku exercises/booleans/double-negation.raku
False
True
```

{% include nav.html %}