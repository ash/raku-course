---
title: 'Soluzione: Tutti pari'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say so all(2, 4, 6) %% 2;
```

🦋 Trova il programma nel file [all-even.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/all-even.raku).

## Output

```
True
```

## Commenti

1. La prova fa autothreading: `%% 2` viene applicato a ciascun valore, e la junction `all` richiede che ognuno la superi.

1. Tutti e tre i numeri sono pari, quindi il risultato è `True`. Se anche uno solo fosse dispari, sarebbe `False`.

{% include nav.html %}
