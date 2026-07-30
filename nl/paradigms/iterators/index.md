---
title: Iterators
translations_gpt:
---

{% include menu.html %}

De vorige sectie bouwde reeksen met `gather` en `take`. Deze gaat een niveau dieper, naar het mechanisme dat de waarden werkelijk aflevert: de _iterator_.

Een iterator is het kleine object achter elke lijst, elk bereik en elke luie reeks in Raku. Hij weet één ding te doen — de **volgende** waarde produceren — en niets meer. Telkens wanneer je een `for`-lus schrijft of `map` aanroept, vraagt Raku stilletjes aan een iterator om één waarde tegelijk tot er geen meer zijn. Deze sectie toont dat protocol rechtstreeks: hoe je met de hand waarden uit een iterator haalt, en hoe je zelf een iterator schrijft.

{% include nav.html %}
