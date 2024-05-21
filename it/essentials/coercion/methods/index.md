---
title: Conversione dei tipi utilizzando metodi di coercizione dei tipi
---

{% include menu.html %}

Per convertire, o _coercere_ un tipo, chiama un metodo con il nome del tipo di dato. Ad esempio, convertire una stringa in un numero intero:

```raku
my $howmany = '42';
my $n = $howmany.Int;
say $n;
```

In molti casi, non è necessario convertire i valori esplicitamente, poiché Raku lo fa per te. Il seguente codice funziona correttamente e in modo prevedibile:

```raku
my $a = '10';
my $b = '20';
my $c = $a + $b;
say "The result is $c."; # The result is 30.
```

Le due variabili, `$a` e `$b`, contengono stringhe, ma sono utilizzate in un'espressione aritmetica con `+`. A questo punto, entrambe le stringhe sono convertite in numeri interi, e quindi anche `$c` diventa un intero. Una variabile che contiene un intero viene interpolata in una stringa nell'ultima riga, dove Raku esegue le operazioni necessarie per presentare il numero come una sequenza di caratteri numerici.

{% include nav.html %}