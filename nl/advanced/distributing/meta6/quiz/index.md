---
title: Quiz — Distributies
translations_gpt:
---

{% include menu.html %}

Welk bestand beschrijft een Raku-distributie — de naam, versie en wat het aanbiedt?

{:.quiz}
0 | `README.md`
1 | `META6.json`
0 | `Makefile`
0 | `distribution.cfg`

{% include quiz.html %}

<div class="extended-explanation">

Een distributie wordt beschreven door `META6.json`, een JSON-bestand in de hoofdmap. De `provides`-sleutel koppelt elke modulenaam aan het bronbestand, en `depends` somt de andere distributies op die het nodig heeft.

</div>

{% include nav.html %}
