---
title: 'Soluzione: Quanti numeri sono uguali?'
---

{% include menu.html %}

Il programma dovrebbe fare alcuni confronti. Per tre numeri in input, ci sono due casi possibili:

1. Tutti e tre i numeri sono uguali,
1. Solo due numeri sono uguali, e
1. Tutti i numeri sono diversi.

## Codice

Ecco la soluzione con confronti espliciti.

```raku
my $n1 = prompt 'Inserisci il numero 1: ';
my $n2 = prompt 'Inserisci il numero 2: ';
my $n3 = prompt 'Inserisci il numero 3: ';

if $n1 == $n2 == $n3 {
    say 3;
}
elsif $n1 == $n2 || $n2 == $n3 || $n1 == $n3 {
    say 2;
}
else {
    say 0;
}
```

🦋 Trova il programma nel file [how-many-equal-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/how-many-equal-numbers.raku).

## Output

```console
$ raku exercises/conditional-checks/how-many-equal-numbers.raku 0 0 0
Inserisci il numero 1: 14
Inserisci il numero 2: 8
Inserisci il numero 3: 8
2

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Inserisci il numero 1: 15
Inserisci il numero 2: 15
Inserisci il numero 3: 15
3

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Inserisci il numero 1: 4
Inserisci il numero 2: 6
Inserisci il numero 3: 8
0
```

## Commenti

1. Nota che puoi confrontare tre numeri in un'unica espressione: `$n1 == $n2 == $n3`.
1. Torna a questo compito e risolvilo di nuovo dopo aver appreso l'operatore di riduzione.

{% include nav.html %}