---
title: 'Soluzione: Indici dispari'
---

{% include menu.html %}

Per risolvere questo compito, puoi usare il costrutto `loop` e incrementare la variabile del ciclo di 2 ad ogni iterazione. Ma puoi anche usare un ciclo `for` e scansionare i numeri da 1 alla metà della lunghezza dell'array, e poi moltiplicarli per due.

## Codice

Ecco la soluzione:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21;

say @data[2 * $_ - 1] for 1 .. @data/2;
```

🦋 Trova il programma nel file [odd-indices.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/odd-indices.raku).

## Output

Prima, esegui il programma con gli elementi originali dei dati.

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
```

Poi, aggiungi un altro elemento ai dati:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21, 22;
```

Conferma che il nuovo elemento con un indice dispari appare nell'output:

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
22
```

## Commenti

Nella prossima parte del corso, torneremo su questo compito per risolverlo usando un approccio completamente diverso.

{% include nav.html %}