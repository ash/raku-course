---
title: La routine note
---

{% include menu.html %}

La routine `note` stampa i suoi argomenti sul flusso di errori standard. Per il resto, è simile a [`say`](../say).

1. Chiama il metodo `gist` sui suoi argomenti.
1. Aggiunge un carattere di nuova riga.
1. Converte il risultato in UTF-8.
1. Lo invia al flusso `STDERR`.

```raku
my $x = 42;
note "Il valore corrente di \$x è $x";
```

Conferma che questo programma non invia il messaggio a `STDOUT`:

```
$ raku t.raku > /dev/null
Il valore corrente di $x è 42
```

Se non viene passato alcun argomento a `note`, stampa `Noted` come messaggio predefinito.

{% include nav.html %}