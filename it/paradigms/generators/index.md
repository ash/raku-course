---
title: Generatori
translations_gpt:
---

{% include menu.html %}

Un _generatore_ è una routine che produce una serie di valori uno alla volta, consegnandone ciascuno su richiesta invece di costruire tutto l'elenco in anticipo. Raku lo scrive con la coppia `gather` / `take`: dentro un blocco `gather`, ogni `take` consegna un valore alla sequenza risultante, e il blocco si mette in pausa proprio lì fino a quando il valore successivo non viene tirato.

Poiché i valori sono prodotti pigramente — solo quando vengono richiesti — un generatore può persino descrivere una serie senza fine. Questa sezione mostra come costruire sequenze con `gather` e `take`. Il meccanismo di più basso livello che tira davvero fuori quei valori, uno a uno, è l'argomento della sezione successiva, [Iteratori](/it/paradigms/iterators).

{% include nav.html %}
