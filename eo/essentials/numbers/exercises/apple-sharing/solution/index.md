---
title: 'Solvo: Poma divido'
---

{% include menu.html %}

Jen la solvo al la problemo.

## Kodo

```raku
my $N = 3;
my $K = 11;

my $gets = $K div $N;
my $remains = $K % $N;

say "Ĉiu persono ricevas $gets pomo(j)n.";
say "Estas $remains pomo(j)n restantaj.";
```

🦋 Vi povas trovi la plenan kodon en la dosiero [apple-sharing.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/apple-sharing.raku).

## Eligo

Kun la eniraj nombroj 3 kaj 11, la programo presas la jenan eligon:

```console
$ raku exercises/numbers/apple-sharing.raku
Ĉiu persono ricevas 3 pomo(j)n.
Estas 2 pomo(j)n restantaj.
```

Modifu la komencan valoron de `$N` kaj `$K` por modeli aliajn situaciojn:

* `$K` estas multoblo de `$N`, ekzemple, `12` kaj `3`;
* `$K` estas egala al `$N`;
* `$K` estas malpli ol `$N`.

## Komentoj

En la programo, ni uzas la du operatorojn: `div` por plenumi entjeran dividadon kaj `%` por akiri la reston de la divido. Alternative, vi povas fari la kalkulojn en la sekva maniero:

```raku
my $gets = $K div $N;
my $remains = $K - $N * $gets;
```

Ankaŭ notu kiel la variabloj estas interpolitaj en la ĉeno.

{% include nav.html %}