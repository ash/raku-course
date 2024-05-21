---
title: 'Soluzione: Se il numero è entro i limiti'
---

{% include menu.html %}

Il programma utilizza un intervallo creato dai numeri inseriti dall'utente. Poi, il controllo smartmatch verifica se il terzo numero è entro i limiti dell'intervallo. Il risultato del test smartmatch è un valore Booleano, quindi possiamo stamparlo immediatamente.

## Codice

Ecco la soluzione:

```raku
my $begin = prompt 'Da (incluso): ';
my $end = prompt 'A (escluso): ';

my $n = prompt 'Qual è il numero? ';

say $n ~~ $begin ..^ $end;
```

🦋 Trova il programma nel file [number-in-limits.raku](https://github.com/ash/raku-course/blob/master/exercises/ranges/number-in-limits.raku).

## Output

Prova diversi casi, incluso quando il numero coincide con la fine dell'intervallo.

```console
$ raku exercises/ranges/number-in-limits.raku
Da (incluso): 1
A (escluso): 2
Qual è il numero? 1.5
True

$ raku exercises/ranges/number-in-limits.raku
Da (incluso): 100
A (escluso): 200
Qual è il numero? 100
True

$ raku exercises/ranges/number-in-limits.raku
Da (incluso): -5
A (escluso): -2
Qual è il numero? -2
False
```

## Commento

Nota come l'estremo destro dell'intervallo è escluso: `$begin ..^ $end`.

{% include nav.html %}