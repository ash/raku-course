---
title: Concatenare i feed
translations_gpt:
---

{% include menu.html %}

Il vero valore dei flussi appare quando gli stadi sono parecchi. Ogni `==>` passa il proprio risultato all'operazione successiva, quindi un'intera pipeline si legge dall'alto in basso nell'ordine in cui avviene il lavoro:

```raku
(1..10)
    ==> grep(* %% 2)
    ==> map(* ** 2)
    ==> my @result;

say @result; # [4 16 36 64 100]
```

Segui i dati giù per la pagina: parti da `1..10`, conserva i numeri pari, eleva al quadrato ciascuno di essi e raccogli il risultato. I numeri pari sono `2, 4, 6, 8, 10`, e i loro quadrati sono `4, 16, 36, 64, 100`.

Scritta come catena di metodi, la stessa pipeline è `(1..10).grep(* %% 2).map(* ** 2)` — e anche quella si legge da sinistra a destra proprio come il flusso. Una catena di metodi non va dall'interno all'esterno; esegue i propri stadi esattamente nello stesso ordine. La forma che si legge davvero dall'interno all'esterno è quella che annida le operazioni come funzioni semplici, `map(* ** 2, grep(* %% 2, 1..10))`, dove devi partire dalla chiamata più interna e lavorare verso l'esterno.

Un flusso, quindi, non è un modo di sfuggire al codice dall'interno all'esterno: è un'altra grafia di una pipeline da sinistra a destra. Ciò che aggiunge è l'impaginazione: ogni stadio `==>` può stare sulla propria riga, e l'unico operatore funziona allo stesso modo sia per i passi in stile metodo sia per quelli in stile funzione, il che tiene facile da scorrere una lunga pipeline. Alla fine i flussi e le catene di metodi fanno lo stesso lavoro; scegli quello che rende più chiara una particolare trasformazione.

{% include nav.html %}
