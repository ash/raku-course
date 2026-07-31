---
title: 'Soluzione: Un istogramma testuale'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my %sales = apples => 5, pears => 3, plums => 8;

for %sales.sort -> $pair {
    say "{$pair.key}\t{ '#' x $pair.value }";
}
```

🦋 Trova il programma nel file [histogram.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/histogram.raku).

## Output

```
apples	#####
pears	###
plums	########
```

## Commenti

1. L'operatore di ripetizione di stringhe `x` costruisce ogni barra: `'#' x 5` è `#####`.
Il valore diventa semplicemente la lunghezza della barra.

1. Il `\t` fra l'etichetta e la barra è un carattere di tabulazione, quindi le barre si
allineano in colonna invece di cominciare subito dopo ogni nome di lunghezza diversa.

{% include nav.html %}
