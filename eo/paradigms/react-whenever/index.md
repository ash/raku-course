---
title: react kaj whenever
translations_gpt:
---

{% include menu.html %}

Konektiĝi al unu sola supply estas bone, sed veraj reaktivaj programoj ofte observas **plurajn** fluojn samtempe kaj reagas al tiu, kiu produktas valoron sekve. Raku havas dediĉitan sintakson por tio: la blokon `react`, kun unu aŭ pluraj blokoj `whenever` ene de ĝi.

Bloko `react` starigas la reagojn kaj poste atendas, plenumante ĉiun korpon `whenever` laŭ la eligoj de ĝia supply — ĝis ĉiuj supply finiĝas. Ĉi tiu sekcio montras, kiel la du kunlaboras.

{% include nav.html %}
