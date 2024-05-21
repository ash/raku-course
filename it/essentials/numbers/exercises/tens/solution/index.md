---
title: Soluzione a ‘Numero delle decine’
---

{% include menu.html %}

Ecco come puoi risolvere il compito.

## Codice

```raku
my $n = prompt 'Inserisci un numero intero positivo: ';

say ($n % 100) div 10;
```

🦋 Puoi trovare il codice completo nel file [tens.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/tens.raku).

## Output

Esegui il programma e prova alcuni casi diversi:

* Un numero tondo a tre cifre come 120;
* Un multiplo di 100, per esempio, 400;
* Un numero che è maggiore di 10 ma minore di 100.
* Un numero inferiore a 10.

Per il numero 234, l'output del programma appare così:

```console
$ raku exercises/numbers/tens.raku
Inserisci un numero intero positivo: 234
3
```

## Commenti

In questa soluzione, viene utilizzata nuovamente la combinazione del modulo `%` e della divisione intera `div`.

Nota lo spazio prima della parentesi aperta. Deve esserci; altrimenti, si ottiene un errore di sintassi. Torneremo su [questo aspetto](/it/essentials/more-on-functions/mind-the-space) di Raku nella sezione sulle funzioni, ma per ora, digita il codice come mostrato sopra o aggiungi un altro paio di parentesi per circondare l'argomento della funzione — in questo caso, non è necessario lo spazio:

```raku
    say(($n % 100) div 10);
```

{% include nav.html %}