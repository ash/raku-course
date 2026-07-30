---
title: Speciale en dynamische variabelen
---

{% include menu.html %}

Raku-variabelenamen kunnen een tweede markering dragen na de sigil, een zogenaamde _twigil_. De twigil vertelt je iets over waar de variabele zich bevindt en hoe deze wordt gevonden — of deze dynamisch van scope is, door de compiler wordt aangeleverd, of aan een object is gekoppeld.

Dit onderdeel legt twigils uit, kijkt uitgebreid naar het meest bruikbare type — _dynamische_ variabelen, die via de call stack worden opgezocht in plaats van via gewone lexicale scope — en geeft een overzicht van de speciale variabelen die Raku voor je vooraf definieert.

{% include nav.html %}
