---
title: 'Solution: Banchi in classe'
---

{% include menu.html %}

La soluzione al problema è mostrata di seguito.

## Codice

```raku
my $students = 23;

my $desks = $students div 2 + $students % 2;

say "$desks desks must be bought.";
```

🦋 Puoi trovare il codice completo nel file [class-desks.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/class-desks.raku).

## Output

Esegui il programma almeno due volte provando sia un numero dispari che pari di studenti. Ad esempio, per i numeri di input `23` e `24`, il programma stampa lo stesso risultato:

```console
$ raku exercises/numbers/class-desks.raku
12 desks must be bought.
```

## Commenti

Non è sufficiente solo dividere il numero di studenti per due. È importante gestire sia i numeri dispari che pari. Una delle possibili soluzioni per arrotondare il numero verso l'alto: `$students div 2 + $students % 2`. Quando il numero di studenti è pari, il secondo componente è zero, e il risultato è uguale alla metà del numero di studenti. Ma quando il numero di studenti è dispari, il primo componente è ancora un numero intero grazie a `div` invece di `/`, e il secondo termine dell'espressione aggiunge un banco extra.

{% include nav.html %}