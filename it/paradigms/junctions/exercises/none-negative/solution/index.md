---
title: 'Soluzione: Nessuno negativo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say so none(3, 7, 2) < 0;
```

🦋 Trova il programma nel file [none-negative.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/none-negative.raku).

## Output

```
True
```

## Commenti

1. Una junction `none` è vera quando **nessun** valore corrisponde al confronto.

1. Nessuno di `3, 7, 2` è sotto zero, quindi il risultato è `True`. Un solo valore negativo lo renderebbe `False`.

{% include nav.html %}
