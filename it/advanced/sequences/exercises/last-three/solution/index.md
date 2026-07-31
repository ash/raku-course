---
title: 'Solution: Gli ultimi tre'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
say (5, 10 ... 50).tail(3);
```

🦋 Puoi trovare il codice sorgente nel file [last-three.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sequences/last-three.raku).

## Output

```
(40 45 50)
```

## Commenti

1. I valori iniziali `5, 10` impostano un passo aritmetico di cinque, e la sequenza prosegue fino al punto finale `50`.

1. `tail(3)` restituisce gli ultimi tre valori della sequenza finita — `40, 45, 50` — proprio come `head` restituirebbe i primi.

{% include nav.html %}
