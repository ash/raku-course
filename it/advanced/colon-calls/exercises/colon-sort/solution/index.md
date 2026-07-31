---
title: 'Solution: Sort con due punti'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione al compito.

## Codice

```raku
my @words = <pear fig apple kiwi>;
say @words.sort: *.chars;
```

🦋 Puoi trovare il codice sorgente nel file [colon-sort.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-sort.raku).

## Output

```
(fig pear kiwi apple)
```

## Commenti

1. I due punti passano la chiave di ordinamento a `sort` senza bisogno di parentesi attorno ad essa.

1. `*.chars` è un'espressione Whatever che sta per "il numero di caratteri di ogni elemento". `sort` la usa come chiave, quindi le parole vengono ordinate dalla più corta: `fig` (3), poi `pear` e `kiwi` (4), poi `apple` (5).

1. `pear` mantiene la sua posizione prima di `kiwi` perché hanno la stessa lunghezza e `sort` è stabile, preservando l'ordine originale delle chiavi uguali.

{% include nav.html %}
