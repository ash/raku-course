---
title: 'Soluzione: hyper con un filtro'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say (1..20).hyper.grep(* > 10).map(*²);
```

🦋 Trova il programma nel file [hyper-filter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-filter.raku).

## Output

```
(121 144 169 196 225 256 289 324 361 400)
```

## Commenti

1. `*²` è solo la grafia con l'apice di Raku per `* ** 2`: il `²` è un operatore postfisso di potenza, quindi `*²` è un `WhateverCode` che eleva al quadrato il proprio argomento. Scrivi `* ** 2` se preferisci.

1. `.hyper` parallelizza tutta la catena — il `grep` che conserva i numeri sopra `10` e il `map` che li eleva al quadrato — preservando l'ordine.

1. Poiché l'ordine viene mantenuto, i quadrati tornano nella stessa sequenza dei loro ingressi (`11²`, `12²`, …, `20²`), dando `(121 144 169 196 225 256 289 324 361 400)`.

{% include nav.html %}
