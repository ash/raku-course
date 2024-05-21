---
title: Soluzione di ‘Convertire l'input dell'utente in un numero’
---

{% include menu.html %}

Il programma può essere semplice come questo:

## Codice

```raku
my Int $n = prompt 'Inserisci un numero: ';
say $n;
```

🦋 Puoi trovare il codice sorgente nel file [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/input-number.raku).

## Esempio

Eseguilo e inserisci un numero intero, positivo o negativo:

```console
$ raku exercises/typed-variables/input-number.raku
Inserisci un numero: -42
-42
```

## Commenti

Come abbiamo [visto](/it/essentials/typed-variables/allomorphs), il valore di ritorno di `prompt` è `IntStr`, che può essere assegnato a una variabile `Int` senza coercizione.

Nota, però, che il programma verrà terminato con un'eccezione se inserisci una stringa che non può essere convertita in un numero intero.

{% include nav.html %}