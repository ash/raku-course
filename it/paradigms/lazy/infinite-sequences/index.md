---
title: Sequenze infinite
translations_gpt:
---

{% include menu.html %}

Sostituisci il valore finale con un `*` e la sequenza diventa **infinita**: non ha un ultimo elemento. Poiché l'elenco è pigro, la cosa è perfettamente sicura: nulla viene calcolato finché non lo prendi.

```raku
say (1, 2, 4 ... *).head(5); # (1 2 4 8 16)
```

La serie delle potenze di due va avanti per sempre, ma `.head(5)` ne estrae solo le prime cinque. L'intervallo `1..*` è la sequenza infinita più semplice — tutti gli interi da uno in poi:

```raku
say (1..*).head(3);          # (1 2 3)
say (1..*).map(* ** 2).head(4); # (1 4 9 16)
```

Puoi persino definire una sequenza in termini dei propri elementi precedenti. La sequenza di Fibonacci, dove ogni numero è la somma dei due precedenti, è notoriamente una riga sola:

```raku
my @fib = 1, 1, * + * ... *;
say @fib[^10]; # (1 1 2 3 5 8 13 21 34 55)
```

La chiusura `* + *` prende i due elementi precedenti e li somma. Conservare qui la sequenza in `@fib` va bene perché l'operatore `...` la marca come pigra, quindi l'array non prova a calcolarla tutta: vengono prodotti solo i dieci elementi richiesti da `@fib[^10]`.

La regola pratica: una sequenza infinita è sicura finché ne estrai soltanto una fetta finita.

{% include nav.html %}
