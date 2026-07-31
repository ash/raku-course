---
title: Laziness e eagerness
translations_gpt:
---

{% include menu.html %}

Alcune liste in Raku vengono calcolate solo quando i loro elementi sono necessari — sono _lazy_ (pigre). I prefissi `lazy` e `eager` permettono di controllare questo comportamento in modo esplicito.

Il prefisso `eager` forza una lista a essere prodotta **tutta in una volta**, immediatamente:

```raku
my @squares = eager (1..3).map(* ** 2);
say @squares; # [1 4 9]
```

Senza `eager` il `map` produrrebbe comunque i valori, ma `eager` garantisce che vengano tutti calcolati subito, anziché su richiesta.

Il prefisso `lazy` fa l'opposto: contrassegna una lista come lazy, in modo che i suoi elementi vengano prodotti solo quando richiesti. Questo è ciò che permette a una lista di essere concettualmente infinita:

```raku
my $numbers = lazy (1 .. Inf);
say $numbers.is-lazy; # True
```

Il metodo `.is-lazy` conferma che la lista non cercherà di calcolare tutti i suoi (infiniti) elementi in anticipo.

Questo esempio particolare è esattamente un caso in cui Raku assumerebbe comunque la pigrizia: un intervallo illimitato come `1 .. Inf` è già lazy, quindi `say (1 .. Inf).is-lazy` stampa `True` anche senza il prefisso. Scrivere `lazy` qui non cambia nulla — rende solo esplicita l'intenzione. Il prefisso diventa utile quando volete rendere lazy una lista che altrimenti verrebbe calcolata immediatamente.

Nella maggior parte dei casi Raku sceglie in modo sensato da solo — gli intervalli e le sequenze sono lazy, l'assegnazione ordinaria a un array è eager. Usate questi prefissi quando avete bisogno di sovrascrivere quella scelta: `eager` per forzare un calcolo costoso ad avvenire subito, `lazy` per rinviarne uno che potrebbe essere grande o illimitato.

{% include nav.html %}
