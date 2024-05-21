---
title: Soluzione a ‘Somma dei numeri’
---

{% include menu.html %}

Ecco la soluzione al problema.

## Codice

```raku
my $a = prompt 'Inserisci il numero A: ';
my $b = prompt 'Inserisci il numero B: ';
my $c = prompt 'Inserisci il numero C: ';

my $sum = $a + $b + $c;

say "La somma dei numeri è $sum.";
```

🦋 Puoi trovare il codice completo nel file [sum-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum-of-numbers.raku).

## Output

Esegui il programma alcune volte e conferma che funziona con numeri di diversi tipi.

```console
$ raku exercises/numbers/sum-of-numbers.raku
Inserisci il numero A: 1.2
Inserisci il numero B: -3.4
Inserisci il numero C: 45
La somma dei numeri è 42.8.
```

## Commenti

Nota che stiamo utilizzando direttamente il valore restituito dalla routine `prompt`. Questo potrebbe causare problemi se l'utente inserisce una stringa che non rappresenta un valore. Possiamo migliorare il programma in futuro dopo aver imparato a gestire le eccezioni.

{% include nav.html %}