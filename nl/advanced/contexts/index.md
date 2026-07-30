---
title: Contexten
translations_gpt: Contexts
---

{% include menu.html %}

Een waarde in Raku kan zich soms anders gedragen doordat het zich aanpast aan de _context_ waarin het wordt gebruikt. Dezelfde array kan bijvoorbeeld fungeren als een getal (de lengte), als een string (de elementen samengevoegd), of als een waarheidswaarde (array is leeg of niet), afhankelijk van wat de omringende code vraagt.

Het begrijpen van context verklaart veel van Raku dat anders verrassend zou lijken: waarom `+@array` een getal is, waarom een array die in een scalar wordt geplaatst zich als een enkel item gedraagt, en waarom `if @array` op leegte test. Dit gedeelte behandelt de belangrijkste contexten.

{% include nav.html %}
