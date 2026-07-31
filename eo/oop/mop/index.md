---
title: La metaobjekta protokolo 🆕
translations_gpt:
---

{% include menu.html %}

Ĉiu klaso, rolo kaj tipo en Raku estas mem priskribata de alia objekto — ĝia _metaobjekto_ — kiu konas la nomon de la tipo, ĝiajn atributojn, ĝiajn metodojn, kaj ĝian lokon en la hereda arbo. La interfaco al ĉi tiuj metaobjektoj estas la _metaobjekta protokolo_, aŭ MOP.

Vi jam uzis angulon de ĝi: `.^name` estas MOP-voko. Ĉi tiu sekcio montras la sintakson `.^` ĝuste, la plej utilajn metametodojn por inspekti tipon, kaj kiel la MOP eĉ permesas al vi aldoni metodojn al klaso dum la programo ruliĝas.

{% include nav.html %}
