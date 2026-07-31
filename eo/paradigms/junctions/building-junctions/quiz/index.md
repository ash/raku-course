---
title: Kvizo — Kunligoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
say so 4 == all(2, 4, 6);
```

{:.quiz}
0 | True
1 | False
0 | all(2, 4, 6)
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

`all`-kunligo estas vera nur kiam **ĉiu** valoro kongruas. La testo `4 == all(2, 4, 6)` demandas, ĉu `4` egalas `2` kaj `4` kaj `6` — kion ĝi ne faras, do la rezulto estas `False`.

Scivolemas, kio *povus* fari ĝin `True`? La maldekstra flanko devus egali ĉiun el `2`, `4` kaj `6` samtempe. Neniu unuopa nombro povas — sed kunligo maldekstre povas: `any`-kunligo, kiu **enhavas ĉiujn tri** el tiuj valoroj, funkcias, ĉar tiam ĉiu el la komparoj sukcesas. La du flankoj ne devas havi la saman grandon — la maldekstra povas porti kromajn valorojn:

```raku
say so any(2, 4, 6, 8) == all(2, 4, 6); # True
say so any(2, 4)       == all(2, 4, 6); # False
```

La unua estas `True`, ĉar `any(2, 4, 6, 8)` ankoraŭ egalas `2`, `4` kaj `6` (la kroma `8` estas sendanĝera). La dua estas `False`, ĉar la maldekstra flanko ne havas `6`, do `left == 6` malsukcesas.

</div>

{% include nav.html %}
