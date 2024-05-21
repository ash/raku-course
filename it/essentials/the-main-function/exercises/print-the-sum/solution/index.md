---
title: 'Soluzione: Stampa la somma'
---

{% include menu.html %}

Questo programma consiste in una singola funzione `MAIN` che prende due argomenti tipizzati, entrambi costruiti dagli argomenti della linea di comando.

## Codice

Ecco la soluzione:

```raku
sub MAIN(Int $a, Int $b) {
    say $a + $b;
}
```

🦋 Trova il programma nel file [print-the-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/print-the-sum.raku).

## Output

Prova numeri di input diversi:

```console
$ raku exercises/the-main-function/print-the-sum.raku 500 700
1200
```

Puoi anche provare a eseguire il programma senza argomenti o con argomenti di tipi diversi e vedere cosa succede. Parleremo di come gestire questi casi nella seconda parte del corso.

{% include nav.html %}