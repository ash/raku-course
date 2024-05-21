---
title: Interpolazione di codice nelle stringhe Raku
---

{% include menu.html %}

Il livello successivo di interpolazione è l'interpolazione di codice. Ti permette di inserire codice semplice (e anche complesso!) direttamente all'interno di una stringa tra doppi apici.

Il codice interpolato è inserito tra parentesi graffe:

```raku
my $a = 10;
my $b = 20;
say "La somma di $a e $b è {$a + $b}.";
```

Il programma stampa:

```console
$ raku t.raku 
La somma di 10 e 20 è 30.
```

## Ancora variabili

Una delle applicazioni di questo metodo è aiutare a disambiguare situazioni in cui una variabile deve essere seguita da un testo che potrebbe essere erroneamente interpretato come la continuazione del nome della variabile. Per evitare ciò, usa le parentesi graffe per racchiudere la variabile:

```raku
my $how-many = 5;
my $what = 'suit';
say "Ci sono $how-many {$what}s."; # Ci sono 5 suits.
```

Senza parentesi graffe, Raku cercherebbe di interpolare una variabile inesistente `$whats`.

{% include nav.html %}