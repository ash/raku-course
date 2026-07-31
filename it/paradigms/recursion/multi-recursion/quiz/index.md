---
title: Quiz — Ricorsione con subroutine multi
translations_gpt:
---

{% include menu.html %}

Dati `multi fact(0) { 1 }` e `multi fact($n) { $n * fact($n - 1) }`, quale ruolo gioca il candidato `multi fact(0)`?

{:.quiz}
1 | È il caso base — il candidato che la distribuzione sceglie quando l'argomento è `0`
0 | Imposta un valore predefinito restituito per ogni argomento
0 | Gira per primo a ogni chiamata, prima dell'altro candidato
0 | È sintassi obbligatoria che Raku ignora a runtime

{% include quiz.html %}

<div class="extended-explanation">

Il letterale `0` nella firma fa corrispondere quel candidato solo quando l'argomento è esattamente `0`. È il caso base espresso come subroutine a sé: finché l'argomento è più grande, la distribuzione continua a scegliere `multi fact($n)`, e una volta che la ricorsione raggiunge `0` passa a `multi fact(0)` e si ferma.

</div>

{% include nav.html %}
