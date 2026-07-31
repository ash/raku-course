---
title: 'Solvo: La nombro de komando-linio argumentoj'
translations_gpt:
---

{% include menu.html %}

La nombro de argumentoj ankoraŭ venas de `@*ARGS.elems`, sed ĉi-foje ni devas fari ion per ĝi anstataŭ nur presi ĝin. Konservu la nombron en variablo, poste elektu la ĝustan vorton per la ternara operatoro:

## Kodo

```raku
my $n = @*ARGS.elems;
my $word = $n == 1 ?? 'argument' !! 'arguments';
say "You passed $n $word.";
```

🦋 Trovu la programon en la dosiero [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/number-of-command-line-arguments.raku).

## Eligo

Indas testi la tri interesajn kazojn: neniu argumento, ekzakte unu, kaj multaj. Nur la dua uzas la singularan formon.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
You passed 0 arguments.

$ raku exercises/positionals/number-of-command-line-arguments.raku solo
You passed 1 argument.

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
You passed 7 arguments.
```

{% include nav.html %}
