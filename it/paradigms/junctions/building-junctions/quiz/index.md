---
title: Quiz — Junction
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
say so 4 == all(2, 4, 6);
```

{:.quiz}
0 | True
1 | False
0 | all(2, 4, 6)
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

Una junction `all` è vera solo quando corrisponde **ogni** valore. La prova `4 == all(2, 4, 6)` chiede se `4` sia uguale a `2` e a `4` e a `6` — cosa che non è, quindi il risultato è `False`.

Curioso di sapere che cosa *potrebbe* renderlo `True`? Il lato sinistro dovrebbe essere uguale a ciascuno di `2`, `4` e `6` insieme. Nessun singolo numero può — ma una junction a sinistra sì: funziona una junction `any` che **comprenda tutti e tre** quei valori, perché allora ognuno dei confronti riesce. I due lati non devono avere la stessa dimensione: il sinistro può portare valori in più:

```raku
say so any(2, 4, 6, 8) == all(2, 4, 6); # True
say so any(2, 4)       == all(2, 4, 6); # False
```

La prima è `True` perché `any(2, 4, 6, 8)` è comunque uguale a `2`, `4` e `6` (l'`8` in più è innocuo). La seconda è `False` perché il lato sinistro non ha alcun `6`, quindi `sinistro == 6` fallisce.

</div>

{% include nav.html %}
