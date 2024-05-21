---
title: La routine put
---

{% include menu.html %}

Per impostazione predefinita, la routine `put` svolge lo stesso lavoro di [`print`](../print) ma aggiunge una nuova linea alla fine:

1. Converte i suoi argomenti in una stringa chiamando il metodo `Str` su di essi.
1. Aggiunge un carattere di nuova linea.
1. Lo invia al flusso `STDOUT`.

Alcuni esempi:

```raku
42.put;
put 'Alpha', 'Beta';

my @array = 3, 4, 5;
put @array;

my %hash = a => 'b', c => 'd';
%hash.put;
```

Gli output del programma:

```console
$ raku t.raku
42
AlphaBeta
3 4 5
a	b
c	d
```

%%tipblock
## Una nuova linea di `put`

I caratteri effettivi che vengono aggiunti dopo l'output sono presi dal metodo `nl-out` del flusso di output. Il suo valore predefinito è `\n`.
%%/tipblock

{% include nav.html %}