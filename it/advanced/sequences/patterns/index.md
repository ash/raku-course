---
title: Pattern di sequenza
---

{% include menu.html %}

L'operatore `...` riconosce più dei semplici passi aritmetici.

Se gli fornisci tre valori che crescono per moltiplicazione, continua con una sequenza _geometrica_:

```raku
say 1, 2, 4 ... 64; # (1 2 4 8 16 32 64)
```

Qui ogni valore è il doppio del precedente, quindi la sequenza raddoppia fino a raggiungere `64`.

Le sequenze non sono limitate ai numeri. Con le stringhe, Raku segue l'ordine alfabetico naturale:

```raku
say 'a' ... 'e'; # (a b c d e)
```

Una sequenza può anche contare all'indietro. Quando il punto finale è inferiore al punto di partenza, i valori diminuiscono:

```raku
say 10 ... 1; # (10 9 8 7 6 5 4 3 2 1)
```

In ogni caso, descrivi il modello tramite un esempio e l'operatore `...` completa il resto.

{% include nav.html %}
