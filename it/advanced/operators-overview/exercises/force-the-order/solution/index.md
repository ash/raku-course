---
title: 'Solution: Forzare l''ordine'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
say 2 ** (3 + 1);
```

🦋 Puoi trovare il codice sorgente nel file [force-the-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/force-the-order.raku).

## Output

```
16
```

## Commenti

1. Senza le parentesi, `**` avrebbe una precedenza più alta di `+`, dando `(2 ** 3) + 1 = 9`.

1. Le parentesi alzano la precedenza dell'addizione, quindi `3 + 1` viene calcolato per primo e l'espressione diventa `2 ** 4`, che è `16`. Le parentesi permettono sempre di sovrascrivere la precedenza predefinita.

{% include nav.html %}
