---
title: Sequenze lazy e infinite
---

{% include menu.html %}

Una sequenza non deve calcolare tutti i suoi valori in una volta sola. Le sequenze in Raku sono _lazy_: ogni valore viene prodotto solo quando è effettivamente necessario. Questo rende possibile descrivere una sequenza che non ha alcuna fine.

Per scrivere una sequenza infinita, usa `Inf` come punto finale. Racchiudi la sequenza tra parentesi, perché `...` ha una precedenza più bassa di `=`:

```raku
my $naturals = (1 ... Inf);
```

Senza le parentesi, `my $naturals = 1 ... Inf` assegnerebbe solo `1` alla variabile e poi costruirebbe la sequenza per conto suo — e valutare una sequenza infinita senza risultato bloccherebbe il programma.

Non viene calcolato ancora nulla. La sequenza fornirà i valori solo quando li richiedi. Il metodo `head` prende i primi:

```raku
say (1 ... Inf).head(5); # (1 2 3 4 5)
```

Anche se la sequenza è infinita, vengono generati solo i primi cinque numeri. Senza la valutazione lazy, un programma che tentasse di costruire tutta una sequenza infinita non finirebbe mai.

Per una sequenza finita, il metodo `tail` prende i valori dalla fine:

```raku
say (1 ... 100).tail(3); # (98 99 100)
```

La valutazione lazy è ciò che permette di separare la _descrizione_ di una sequenza dalla decisione su quanta parte di essa utilizzare.

{% include nav.html %}
