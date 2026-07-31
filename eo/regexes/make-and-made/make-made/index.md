---
title: make kaj made
translations_gpt:
---

{% include menu.html %}

Anstataŭ elfosi valorojn el la arbo poste, vi povas alfiksi valoron al kongruo **dum** la analizado. Ene de la korpo de ĵetono vi povas enmeti _kodblokon_ — internan `{ … }` skribitan inter la ŝablono — kiu ruliĝas tuj kiam la kongruigo atingas ĝin. Ene de tiu bloko, la funkcio `make` konservas valoron sur la nuna kongruo:

```raku
grammar OneNum {
    token TOP    { <number> { make $<number>.Int } }
    token number { \d+ }
}
```

Kiam `TOP` kongruas, la interna bloko `{ make $<number>.Int }` ruliĝas — la eksteraj kunigaj krampoj estas nur la korpo de la ĵetono — kaj konservas la entjeron sur la kongruo. Vi relegas ĝin poste per `made` (aŭ ĝia alinomo `.ast`):

```raku
say OneNum.parse('42').made; # 42
```

Ĉar ni konservis `$<number>.Int`, la valoro redonita de `made` estas vera `Int` — la nombro mem, ne la kongrua objekto:

```raku
say OneNum.parse('42').made + 1; # 43
```

Notu, ke ĉi tiu aparta `+ 1` donus `43` eĉ sen la `.Int`, ĉar kongruo nombriĝas al siaj ciferoj en aritmetiko. La celo de voki `.Int` estas, ke la *konservita* valoro vere **estas** nombro — kion vi volas, kiam ĝi estas tenata en datumstrukturo aŭ transdonata plu, anstataŭ la kruda kongruo.

La konservita valoro povas esti io ajn — nombro, ĉeno, tabelo, objekto. Ĵetono ankaŭ povas kombini la valorojn, kiujn ĝiaj subĵetonoj faris. Ekzemple, sumigi du kaptitajn nombrojn:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Sum.parse('2+3').made; # 5
```

`make` kaj `made` estas la ponto de «ĝi kongruis» al «jen la signifo». Meti la blokojn enlinie funkcias, sed ĝi miksas la ŝablonon kun la logiko; la sekva sekcio movas tiun logikon en apartan [_agoklason_](/eo/regexes/action-classes).

{% include nav.html %}
