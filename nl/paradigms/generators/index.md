---
title: Generatoren
translations_gpt:
---

{% include menu.html %}

Een _generator_ is een routine die een reeks waarden één voor één produceert en elk op verzoek oplevert in plaats van de hele lijst vooraf op te bouwen. Raku schrijft dat met het paar `gather` / `take`: binnen een `gather`-blok overhandigt elke `take` één waarde aan de resulterende reeks, en het blok pauzeert daar tot de volgende waarde opgehaald wordt.

Omdat de waarden lui geproduceerd worden — alleen zodra erom gevraagd wordt — kan een generator zelfs een eindeloze reeks beschrijven. Deze sectie laat zien hoe je reeksen bouwt met `gather` en `take`. De machinerie op lager niveau die die waarden er werkelijk één voor één uit haalt, is het onderwerp van de volgende sectie, [Iterators](/nl/paradigms/iterators).

{% include nav.html %}
