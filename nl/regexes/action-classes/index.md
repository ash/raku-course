---
title: Actieklassen
translations_gpt:
---

{% include menu.html %}

Inline blokken met `{ make … }` werken, maar ze vervuilen een grammatica met logica en maken haar minder leesbaar. De nette oplossing is een _actieklasse_: een aparte klasse waarvan de methoden naar de tokens van de grammatica genoemd zijn en de `make` voor elk daarvan leveren.

Deze sectie laat zien hoe je een actieklasse schrijft, hoe je haar aan `.parse` meegeeft, en wanneer je haar boven inline acties verkiest.

{% include nav.html %}
