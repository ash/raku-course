---
title: Neordigita paraleleco per race
translations_gpt:
---

{% include menu.html %}

`.race` paraleligas same kiel `.hyper`, kun unu diferenco: ĝi **ne** promesas redoni la rezultojn en ordo. Kiu ajn laboranto finas unue, kontribuas sian rezulton unue.

```raku
say (1..10).race.map(* ** 2).sort; # (1 4 9 16 25 36 49 64 81 100)
```

La kvadratoj revenas en neantaŭvidebla ordo, do la `.sort` estas tie por fari la eligon determinisma. Se ni estus presintaj sen ordigi, la nombroj ĉiuj ĉeestus sed eble miksitaj.

Ĉar ĝi ne devas teni la rezultojn ordigitaj, `.race` povas havi iomete malpli da ŝarĝo ol `.hyper`. La kompromiso estas simpla:

* uzu `.hyper`, kiam la **ordo** de la rezultoj gravas;
* uzu `.race`, kiam ĝi **ne** gravas — ekzemple, kiam vi sumos, nombros aŭ alimaniere kombinos la rezultojn en ord-sendependa maniero.

```raku
say (1..100).race.map(* * 2).sum; # 10100
```

Sumado estas ord-sendependa, do `.race` estas bona elekto ĉi tie kaj donas la saman `10100`. Ambaŭ metodoj temas pri la sama ideo — lasi sendependan laboron kuri samtempe — kaj vi elektas inter ili laŭ tio, ĉu la ordigo gravas por vi.

{% include nav.html %}
