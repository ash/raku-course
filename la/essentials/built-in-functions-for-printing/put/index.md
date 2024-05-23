---
title: The put routine
---

{% include menu.html %}

Per defaltam, `put` munus idem officium facit ac [`print`](../print) sed addit novam lineam in fine:

1. Convertit argumenta sua ad stringam vocando methodum `Str` in eis.
1. Addit characterem novae lineae.
1. Mittit ad `STDOUT` rivum.

Pauca exempla:

```raku
42.put;
put 'Alpha', 'Beta';

meus @array = 3, 4, 5;
put @array;

meus %hash = a => 'b', c => 'd';
%hash.put;
```

Exitus programmatis:

```console
$ raku t.raku
42
AlphaBeta
3 4 5
a	b
c	d
```

%%tipblock
## Nova linea `put`

Veri characteres qui adduntur post exitum sumuntur ex methodo `nl-out` rivi exitus. Valor defaltus est `\n`.
%%/tipblock

{% include nav.html %}