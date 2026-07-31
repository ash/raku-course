---
title: 'Soluzione: Raccogliete i cubi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
```

🦋 Trova il programma nel file [gather-cubes.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-cubes.raku).

## Output

```
[1 8 27 64]
```

## Commenti

1. Il `take` gira una volta per ogni numero, contribuendo il suo cubo (`$_ ** 3`).

1. Il blocco `gather` vale l'elenco di tutti i valori presi.

{% include nav.html %}
