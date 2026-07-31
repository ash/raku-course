---
title: gather e take
translations_gpt:
---

{% include menu.html %}

Un blocco `gather` raccoglie valori. Ovunque al suo interno — cicli e subroutine da esso chiamate comprese — un `take` aggiunge un valore all'elenco che `gather` produce:

```raku
my @squares = gather {
    take $_ ** 2 for 1..3;
}

say @squares; # [1 4 9]
```

Il `take` gira una volta per ogni numero `1, 2, 3`, contribuendo `1`, `4` e `9`. L'intero blocco `gather` vale l'elenco di tutto ciò che è stato preso.

`take` può comparire sotto qualunque flusso di controllo, il che rende `gather` ideale per costruire un elenco con delle condizioni:

```raku
my @evens = gather {
    for 1..10 {
        take $_ if $_ %% 2;
    }
}

say @evens; # [2 4 6 8 10]
```

Qui un valore viene preso solo quando l'`if` riesce, quindi nell'elenco finiscono solo i numeri pari. Spesso questo è più chiaro che costruire l'elenco a mano con `push`, perché la logica si legge come un ciclo normale e `take` si limita a segnare i valori da tenere.

{% include nav.html %}
