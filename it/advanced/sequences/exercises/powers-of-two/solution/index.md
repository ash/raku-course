---
title: 'Solution: Potenze di due'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
say (1, 2, 4 ... Inf).head(8);
```

🦋 Puoi trovare il codice sorgente nel file [powers-of-two.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sequences/powers-of-two.raku).

## Output

```
(1 2 4 8 16 32 64 128)
```

## Commenti

1. I tre valori iniziali `1, 2, 4` crescono per moltiplicazione, quindi `...` riconosce una sequenza geometrica; con `Inf` come punto finale, non si ferma mai da sola.

1. `head(8)` prende solo i primi otto valori. Poiché la sequenza è lazy, il resto non viene mai generato — ed è l'unico motivo per cui è sicuro scrivere una sequenza infinita.

{% include nav.html %}
