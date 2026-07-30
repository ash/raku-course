---
title: react en whenever
translations_gpt:
---

{% include menu.html %}

Eén supply aftappen is prima, maar echte reactieve programma's bekijken vaak **meerdere** stromen tegelijk en reageren op degene die als volgende een waarde levert. Raku heeft daar eigen syntaxis voor: het `react`-blok, met een of meer `whenever`-blokken erin.

Een `react`-blok zet de reacties op en wacht daarna, waarbij het elke `whenever`-body draait zodra de bijbehorende supply uitzendt — tot alle supplies klaar zijn. Deze sectie laat zien hoe de twee samenwerken.

{% include nav.html %}
