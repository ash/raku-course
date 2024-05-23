---
title: Solvo de ‘La nombro de komandliniaj argumentoj’
---

{% include menu.html %}

La solvo estas sufiĉe simpla.

## Kodo

```raku
say @*ARGS.elems;
```

Alternative, vi povas ĉeni ĉiujn metodojn:

```raku
@*ARGS.elems.say;
```

🦋 Trovu la programon en la dosiero [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/number-of-command-line-arguments.raku).

## Eligo

Ĉi tiu programo bezonas teston de du kazoj:

1. Neniuj argumentoj pasitaj.
1. Iom da ne-nula nombro de argumentoj pasitaj.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
0

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
7
```

{% include nav.html %}