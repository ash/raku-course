---
title: Interpolare hash
---

{% include menu.html %}

Per interpolare gli elementi di un array in stringhe con doppi apici, scrivili come fai nel programma stesso: `%data<FR>`. Per interpolare l'intero hash, aggiungi una coppia di angoli vuoti o parentesi graffe: `@data{}`. Il programma seguente illustra questo approccio:

```raku
my %data = FR => 'Paris', IT => 'Rome';

say "%data<FR>";
say "%data<>";

# Oppure:
# say "%data{}";
```

Questo programma stampa i dati richiesti:

```console
$ raku t.raku
Paris
FR	Paris
IT	Rome
```

Nota che la stampa dell'intero hash può generare un output su più linee.

{% include nav.html %}