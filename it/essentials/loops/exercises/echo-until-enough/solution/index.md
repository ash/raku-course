---
title: 'Soluzione: Echo fino a quando basta'
---

{% include menu.html %}

Questo programma richiede un ciclo che si interrompe quando l'utente inserisce una parola predefinita.

## Codice

Ci sono diversi modi simili per risolvere il compito con `while`, `until` o `repeat`. Uno di essi è mostrato qui sotto.

```raku
my $word;
repeat {
    $word = prompt 'La tua parola: ';
    say $word;
} while $word ne 'basta';

say 'OK, fatto.';
```

🦋 Trova il programma nel file [echo-until-enough.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/echo-until-enough.raku).

## Output

Esegui il programma, inserisci alcune parole diverse e poi termina il ciclo.

```console
$ raku exercises/loops/echo-until-enough.raku
La tua parola: questa
questa
La tua parola: è
è
La tua parola: la
la
La tua parola: parola
parola
La tua parola: basta
basta
OK, fatto.
```

## Commento

Nota che dichiari la variabile `$word` _prima_ del ciclo, poiché il test `while` si trova al di fuori dell'ambito del corpo del ciclo. Se la variabile fosse definita all'interno del ciclo, non sarebbe visibile nel test.

{% include nav.html %}