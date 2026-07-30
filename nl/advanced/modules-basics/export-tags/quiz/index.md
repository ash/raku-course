---
title: Quiz — Export-tags
translations_gpt: 'Quiz — Exporttags'
---

{% include menu.html %}

Een module declareert `sub hello is export` en `sub goodbye is export(:partings)`. Welke subroutines kan het programma na `use Greeting :partings;` direct aanroepen?

{:.quiz}
1 | Alleen `goodbye`
0 | Alleen `hello`
0 | Zowel `hello` als `goodbye`
0 | Geen van beide

{% include quiz.html %}

<div class="extended-explanation">

Het noemen van een tag importeert die groep *in plaats van* de standaardgroep, dus `:partings` haalt `goodbye` binnen maar laat `hello` achter. Om beide te krijgen, zou je de ingebouwde `:ALL`-tag gebruiken met `use Greeting :ALL;`.

</div>

{% include nav.html %}
