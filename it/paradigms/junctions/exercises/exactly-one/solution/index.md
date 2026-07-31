---
title: 'Soluzione: Esattamente uno'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say so one(1, 2, 3) == 2;
```

🦋 Trova il programma nel file [exactly-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/exactly-one.raku).

## Output

```
True
```

## Commenti

1. Una junction `one` è vera solo quando **esattamente un** valore corrisponde al confronto.

1. Esattamente uno fra `1, 2, 3` è uguale a `2`, quindi il risultato è `True`. Se ne corrispondessero due (o nessuno), sarebbe `False`. Il `so` fa collassare la junction in un booleano semplice.

{% include nav.html %}
