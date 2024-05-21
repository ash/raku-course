---
title: Soluzione a 'Somma dei numeri da 1 a 100'
---

{% include menu.html %}

Per calcolare la somma dei numeri interi da 1 a 100, è ovviamente possibile sommare tutti quei numeri in una singola lunga espressione. Oppure creare un ciclo (copriremo i cicli nelle sezioni successive). Ma la soluzione migliore è utilizzare una ben nota [formula](https://it.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_⋯):

<div class="formula"><img src="sum.png" style="height: 3.5em; width: auto" /></div>

Con la formula, la soluzione diventa piuttosto banale.

## Codice

```raku
my $N = 100;
my $sum = $N * (1 + $N) / 2;
say "La somma dei numeri da 1 a $N è $sum.";
```

🦋 Puoi trovare il codice completo nel file [sum1-100.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum1-100.raku).

## Output

```console
$ raku exercises/numbers/sum1-100.raku 
La somma dei numeri da 1 a 100 è 5050.
```

{% include nav.html %}