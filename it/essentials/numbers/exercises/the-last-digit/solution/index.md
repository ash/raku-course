---
title: 'Solution: L''ultima cifra'
---

{% include menu.html %}

L'idea della soluzione di questo compito è di utilizzare la divisione modulo 10 per ottenere l'ultima cifra del numero.

## Codice

Ecco la soluzione:

```raku
my $n = prompt 'Inserisci un numero: ';
my $d = $n % 10;
say "L'ultima cifra di $n è $d.";
```

🦋 Trova il programma nel file [the-last-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/the-last-digit.raku).

## Output

Esegui il programma e inserisci un numero intero positivo:

```console
$ raku exercises/numbers/the-last-digit.raku
Inserisci un numero: 1234
L'ultima cifra di 1234 è 4.
```

## Commento

Nota che questo non funziona come previsto con numeri negativi, poiché, ad esempio, `-11 % 10` è `9`, non `1`.

{% include nav.html %}