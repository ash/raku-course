---
title: Variabili locali
---

{% include menu.html %}

Cosa succede se dichiari una variabile non solo nello scope globale ma anche localmente nel blocco?

```raku
my $x = 1;

{
    my $x = 42;
    say $x;
}

say $x;
```

Il programma ha ora due variabili indipendenti. Condividono il nome, ma tutti i riferimenti a `$x` nello scope globale riguardano la variabile globale, mentre il `$x` all'interno del blocco è una variabile locale, diversa dal `$x` globale. Il programma stampa due valori diversi:

```console
$ raku t.raku
42
1
```

{% include nav.html %}