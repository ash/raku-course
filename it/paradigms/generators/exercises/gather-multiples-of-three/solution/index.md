---
title: 'Soluzione: Raccogliete i multipli di tre'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
```

🦋 Trova il programma nel file [gather-multiples-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-multiples-of-three.raku).

## Output

```
[3 6 9 12 15]
```

## Commenti

1. Il ciclo visita ogni numero, ma `take` gira solo quando `$_ %% 3` è vero.

1. Così vengono raccolti nell'elenco solo i multipli di tre.

{% include nav.html %}
