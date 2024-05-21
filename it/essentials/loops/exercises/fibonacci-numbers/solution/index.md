---
title: Soluzione dei 'Numeri di Fibonacci'
---

{% include menu.html %}

Il seguente algoritmo definisce i numeri di Fibonacci.

1. _F<sub>0</sub>_ = 0, _F<sub>0</sub>_ = 1
2. _F<sub>n</sub>_ = _F<sub>n-1</sub>_ + _F<sub>n-2</sub>_

## Codice

Il codice implementa l'algoritmo letteralmente. Utilizza un paio di variabili per mantenere i due numeri di Fibonacci correnti e li aggiorna in un ciclo. Nota che entrambe le variabili vengono aggiornate [in una singola assegnazione](/it/essentials/scalar-variables/assigning-a-value/#multiple-assignment).

```raku
my $a = 0;
my $b = 1;

say $a;
for ^19 {
    ($a, $b) = $b, $a + $b;
    say $a;
}
```

🦋 Trova il programma nel file [fibonacci-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/fibonacci-numbers.raku).

## Output

Ecco l'output del programma che stampa i primi 20 numeri.

```console
$ raku exercises/loops/fibonacci-numbers.raku
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
```

## Ulteriori informazioni su questo argomento

Ricorda questo compito poiché torneremo su di esso in futuro per ottenere un'altra soluzione interessante con le _sequenze_ di Raku.

{% include nav.html %}