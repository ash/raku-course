---
title: 'Solvo: Presi la sumon'
---

{% include menu.html %}

Ĉi tiu programo konsistas el unuopa `MAIN` funkcio kiu prenas du tajpitajn argumentojn, ambaŭ el kiuj estas konstruitaj el la argumentoj de la komandlinio.

## Kodo

Jen la solvo:

```raku
sub MAIN(Int $a, Int $b) {
    say $a + $b;
}
```

🦋 Trovu la programon en la dosiero [print-the-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/print-the-sum.raku).

## Eligo

Provu malsamajn enirajn nombrojn:

```console
$ raku exercises/the-main-function/print-the-sum.raku 500 700
1200
```

Vi ankaŭ povas provi ruli la programon sen la argumentoj aŭ kun la argumentoj de malsamaj tipoj kaj vidi kio okazas. Ni parolos pri traktado de tiuj kazoj en la dua parto de la kurso.

{% include nav.html %}