---
title: "Soluzione: Fattoriale con multi-funzioni"
---

{% include menu.html %}

Questo esercizio riguarda ancora i fattoriali. Infatti, il compito ci permette di illustrare più caratteristiche di Raku.

Quando si calcola un fattoriale partendo dal numero dato e andando verso il basso, è necessario fermarsi quando il numero arriva a 1. Con le multi-funzioni, puoi ottenere ciò estraendo il caso con `$n == 1` in una multi-funzione separata.

## Codice

Ecco la soluzione:

```raku
multi sub factorial(1)  { 1 }
multi sub factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
```

🦋 Trova il programma nel file [factorial-with-multi-functions.raku](https://github.com/ash/raku-course/blob/master/exercises/more-on-functions/factorial-with-multi-functions.raku).

## Output

```console
$ raku exercises/more-on-functions/factorial-with-multi-functions.raku 5
120
```

## Commento

Nota che l'argomento di input è esplicitamente convertito in un intero: `@*ARGS[0].Int`. Questo per prevenire un loop infinito quando il numero di input è `1`. In questo caso, il tipo di parametro passato alla funzione `factorial` è [`IntStr`](/it/essentials/typed-variables/allomorphs), e la prima variante multi non può catturare la chiamata. Al contrario, quando `factorial(2 - 1)` è chiamato ricorsivamente, l'argomento della funzione è un intero, il che rende possibile chiamare la prima variante.

{% include nav.html %}