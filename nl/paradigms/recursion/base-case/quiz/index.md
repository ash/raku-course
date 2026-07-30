---
title: 'Quiz — Het basisgeval'
translations_gpt:
---

{% include menu.html %}

Wat gebeurt er als een recursieve subroutine geen bereikbaar basisgeval heeft?

{:.quiz}
0 | Ze geeft `Nil` terug
0 | Ze geeft `0` terug
1 | Ze houdt nooit op zichzelf aan te roepen en mislukt uiteindelijk
0 | De compiler weigert haar te draaien

{% include quiz.html %}

<div class="extended-explanation">

Zonder bereikbaar basisgeval doet elke aanroep eindeloos een volgende aanroep. De recursie eindigt nooit, en het programma raakt uiteindelijk door zijn aanroepstapel heen en mislukt. Een basisgeval is wat de recursie laat stoppen.

</div>

{% include nav.html %}
