---
title: "Il feed all'indietro"
translations_gpt:
---

{% include menu.html %}

Ogni flusso visto finora scorreva in avanti con `==>`, da una sorgente a sinistra dentro un bersaglio a destra. Raku ha anche l'operatore speculare, `<==`, il **flusso all'indietro**. Va nel verso opposto: il bersaglio sta a **sinistra** e i dati vengono tirati dalla sorgente a **destra**.

Ecco la pipeline dei numeri pari di prima, scritta all'indietro:

```raku
my @evens <== grep(* %% 2) <== (1..10);
say @evens; # [2 4 6 8 10]
```

Leggila da destra a sinistra: prendi `1..10`, conserva i numeri pari e raccoglili in `@evens`. Il risultato è esattamente lo stesso di `(1..10) ==> grep(* %% 2) ==> my @evens` — è cambiata solo la direzione in cui scrivi gli stadi.

I flussi all'indietro si concatenano allo stesso modo, e di nuovo è il bersaglio a guidare:

```raku
my @result <== map(* ** 2) <== grep(* %% 2) <== (1..10);
say @result; # [4 16 36 64 100]
```

Il lavoro avviene comunque partendo dalla sorgente — parti da `1..10`, conserva i pari, elevali al quadrato — ma sulla pagina gli stadi sono elencati dalla destinazione a ritroso verso l'origine. L'ordine degli elementi non viene toccato; `<==` cambia solo la direzione di lettura, mai i dati.

Poiché il codice di solito si legge da sinistra a destra, il `==>` in avanti tende a leggersi più naturalmente: incontri prima i dati e li segui fin dove atterrano. Il `<==` all'indietro è lì per le occasioni in cui guidare con la destinazione racconta meglio la storia — nominare *ciò che stai costruendo* prima di *ciò da cui è costruito*. I due sono specchi esatti, quindi scegli la direzione che si legge meglio.

{% include nav.html %}
