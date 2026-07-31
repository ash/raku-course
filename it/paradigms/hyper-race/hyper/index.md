---
title: map in parallelo con hyper
translations_gpt:
---

{% include menu.html %}

Chiama `.hyper` su un elenco prima di un `map` o di un `grep`, e il lavoro viene distribuito su più thread lavoratori — mentre i risultati tornano comunque nell'**ordine originale**:

```raku
say (1..5).hyper.map(* * 2); # (2 4 6 8 10)
```

Sembra esattamente un `map` ordinario, e il risultato è identico; l'unica differenza è che i raddoppi possono essere stati calcolati su core diversi nello stesso momento.

`.hyper` funziona con `grep` esattamente allo stesso modo: ogni elemento viene messo alla prova in parallelo, e quelli che passano tornano comunque nel loro ordine originale:

```raku
say (1..10).hyper.grep(* %% 2); # (2 4 6 8 10)
```

Poiché `.hyper` preserva l'ordine, è un sostituto immediato di un `map` o `grep` lento: nulla che dipenda dall'ordine dei risultati deve cambiare. Il vantaggio compare solo quando il lavoro su ciascun elemento è abbastanza grande da superare il costo del coordinamento fra thread — elevare al quadrato un numero è in realtà troppo poco costoso perché valga la pena parallelizzarlo. Per lavoro davvero costoso per elemento su un elenco grande, `.hyper` può trasformare una lunga attesa in una breve al prezzo di una singola chiamata di metodo.

Una cosa da tenere a mente: se il lavoro venga *davvero* distribuito sui core dipende dal compilatore. Il linguaggio fissa i risultati — e, per `.hyper`, il loro ordine originale — ma non pretende un'esecuzione realmente parallela. `.hyper` e `.race` **richiedono** il parallelismo invece di esigerlo, quindi un dato compilatore può eseguirli su un pool di thread oppure elaborare gli elementi in sequenza senza dirlo. Trattali come un'occasione di accelerazione, non come una garanzia.

Poiché l'ordine viene mantenuto, le operazioni che *dipendono* da esso continuano a venire giuste. Qui ogni parola viene resa maiuscola in parallelo, eppure i pezzi si riuniscono nella frase nella loro sequenza originale:

```raku
say <raku is fun>.hyper.map(*.uc).join(' '); # RAKU IS FUN
```

{% include nav.html %}
