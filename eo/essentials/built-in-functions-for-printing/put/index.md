---
title: La rutino put
---

{% include menu.html %}

Defaŭlte, la rutino `put` faras la saman laboron kiel [`print`](../print) sed aldonas novan linion ĉe la fino:

1. Konvertas siajn argumentojn al ĉeno per vokado de la metodo `Str` sur ili.
1. Aldonas novan linio-karakteron.
1. Sendas ĝin al la fluo `STDOUT`.

Kelkaj ekzemploj:

```raku
42.put;
put 'Alpha', 'Beta';

my @array = 3, 4, 5;
put @array;

my %hash = a => 'b', c => 'd';
%hash.put;
```

La eligoj de la programo:

```console
$ raku t.raku
42
AlphaBeta
3 4 5
a	b
c	d
```

%%tipblock
## Nova linio de `put`

La faktaj karakteroj, kiuj estas aldonitaj post la eligo, estas prenitaj de la metodo `nl-out` de la eliga fluo. Ĝia defaŭlta valoro estas `\n`.
%%/tipblock

{% include nav.html %}