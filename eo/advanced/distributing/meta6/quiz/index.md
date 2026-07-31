---
title: Kvizo — Distribuoj
translations_gpt:
---

{% include menu.html %}

Kiu dosiero priskribas Raku-distribuon — ĝian nomon, version kaj tion, kion ĝi provizas?

{:.quiz}
0 | `README.md`
1 | `META6.json`
0 | `Makefile`
0 | `distribution.cfg`

{% include quiz.html %}

<div class="extended-explanation">

Distribuo estas priskribata de `META6.json`, JSON-dosiero en ĝia supra dosierujo. Ĝia ŝlosilo `provides` mapas ĉiun modulan nomon al ĝia fontdosiero, kaj `depends` listigas la aliajn distribuojn, kiujn ĝi bezonas.

</div>

{% include nav.html %}
