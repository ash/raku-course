---
title: 'Soluzione: Funzione per calcolare xʸ'
---

{% include menu.html %}

In questo programma, usa l'operatore `**` per calcolare la potenza.

## Codice

Ecco la soluzione:

```raku
sub f($x, $y) { $x ** $y }

say f(5, 3);
say f(2, 10);
say f(-4, 5);
```

🦋 Trova il programma nel file [function-x-to-the-power-of-y.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/function-x-to-the-power-of-y.raku).

## Output

Esegui il programma per confermare che stampa le risposte corrette:

```console
$ raku exercises/functions/function-x-to-the-power-of-y.raku
125
1024
-1024
```

## Commento

Questa funzione funziona anche con potenze negative, per esempio:

```raku
say f(5, -1);  # 0.2
say f(10, -2); # 0.01
```

{% include nav.html %}