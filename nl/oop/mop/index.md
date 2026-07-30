---
title: Het metaobjectprotocol
translations_gpt:
---

{% include menu.html %}

Elke klasse, rol en elk type in Raku wordt zelf beschreven door een ander object — zijn _metaobject_ — dat de naam van het type kent, zijn attributen, zijn methoden en zijn plaats in de overervingsboom. De interface tot deze metaobjecten is het _metaobjectprotocol_, of MOP.

Je gebruikte er al een hoekje van: `.^name` is een MOP-aanroep. Deze sectie toont de `.^`-syntaxis behoorlijk, de nuttigste metamethoden om een type te inspecteren, en hoe het MOP je zelfs toelaat methoden aan een klasse toe te voegen terwijl het programma draait.

{% include nav.html %}
