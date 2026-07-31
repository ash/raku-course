---
title: 'Soluzione: Passi di Collatz'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $n = 27;
my $steps = 0;

while $n != 1 {
    $n = $n %% 2 ?? $n div 2 !! 3 * $n + 1;
    $steps++;
}

say $steps;
```

🦋 Trova il programma nel file [collatz.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/collatz.raku).

## Output

```
111
```

## Commenti

1. Il ternario `?? !!` sceglie il valore successivo in un'unica espressione: dimezza `$n`
quando è pari (`$n %% 2`), altrimenti applica `3 * $n + 1`.

1. `27` è un famoso caso piccolo che prende una deviazione sorprendentemente lunga — `111`
passi — prima di assestarsi finalmente su `1`.

{% include nav.html %}
