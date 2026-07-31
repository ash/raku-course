---
title: Quiz — Il protocollo degli iteratori
translations_gpt:
---

{% include menu.html %}

Quando un iteratore non ha più valori da dare, che cosa restituisce `pull-one`, e come lo metti alla prova?

{:.quiz}
1 | `IterationEnd`, messo alla prova con `=:=`
0 | `Nil`, messo alla prova con `.defined`
0 | un elenco vuoto `()`, messo alla prova con `==`
0 | `0`, messo alla prova con `=:=`

{% include quiz.html %}

<div class="extended-explanation">

Un iteratore esaurito restituisce l'oggetto sentinella `IterationEnd`. Poiché è un unico oggetto condiviso, lo controlli per identità con `=:=` (la prova dello *stesso oggetto*), non per valore o definitezza. Un ciclo `for` usa esattamente questo controllo per sapere quando fermarsi.

</div>

{% include nav.html %}
