---
title: Variabili tipizzate
---

{% include menu.html %}

In Raku, una variabile scalare (o, un contenitore scalare) può contenere un singolo oggetto di diversi tipi. Ad esempio, la stessa variabile può prima contenere un numero e poi una stringa:

```raku
my $var = 42;
$var = 'Hello';
```

Ecco un altro esempio di mescolanza di diversi tipi di dati nella stessa espressione:

```raku
my $a = '100';
my $b = 200;
say $a + $b; # 300
```

Questo, probabilmente, non è la migliore pratica di codifica, ma è un programma Raku perfettamente valido.

Tuttavia, Raku ti permette di specificare cosa può contenere una determinata variabile. Ci sono più dettagli nei seguenti argomenti.

{% include nav.html %}