---
title: 'Solution: Torre di potenze'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
say 2 ** 2 ** 3;
```

🦋 Puoi trovare il codice sorgente nel file [power-tower.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/power-tower.raku).

## Output

```
256
```

## Commenti

1. Poiché `**` è associativo a destra, l'espressione viene raggruppata come `2 ** (2 ** 3)`.

1. Cioè `2 ** 8`, che è `256` — non `(2 ** 2) ** 3`, che sarebbe `64`.

{% include nav.html %}
