---
title: Hyper en race
translations_gpt:
---

{% include menu.html %}

De functionele lijstbewerkingen die je eerder tegenkwam — `map` en `grep` — verwerken hun elementen na elkaar. Wanneer het werk aan elk element onafhankelijk en substantieel is, kan Raku het **parallel** over meerdere CPU-kernen draaien, met vrijwel geen wijziging in je code.

Twee methoden zetten dat aan: `.hyper`, die de resultaten op volgorde houdt, en `.race`, die dat niet doet maar iets sneller kan zijn. Deze sectie toont beide.

{% include nav.html %}
