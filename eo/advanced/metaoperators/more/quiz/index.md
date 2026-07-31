---
title: Kvizo — Hiper kaj kruca
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
say (1, 2, 3) »+» 10;
```

{:.quiz}
1 | (11 12 13)
0 | (11 2 3)
0 | 16
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

La hipera meta-operatoro `»+»` aplikas `+` al ĉiu elemento. Kun ununura valoro `10` dekstre, tiu valoro etendiĝas tra la tuta listo, do ĉiu elemento ricevas `10`: `(11 12 13)`. (Redukto `[+]` anstataŭe kunfandus la liston al la ununura sumo `6`.)

</div>

{% include nav.html %}
