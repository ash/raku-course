---
title: Interpolating arrays
---

{% include menu.html %}

Per interpolare gli elementi di un array nelle stringhe con doppi apici, scrivilo come faresti in un programma stesso: `@data[1]`. Per interpolare l'intero array, aggiungi un paio di parentesi vuote: `@data[]`. Il seguente programma illustra questo approccio:

```raku
my @data = 10, 20, 30;

say "First: @data[0], last: @data[1]";
say "All elements: @data[]";
```

Questo programma stampa i dati richiesti:

```console
$ raku t.raku 
First: 10, last: 20
All elements: 10 20 30
```

{% include nav.html %}