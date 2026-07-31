---
title: Enliniaj agoj kaj agoklasoj
translations_gpt:
---

{% include menu.html %}

Vi nun havas du manierojn alfiksi signifon al analizo. Kiun vi uzu?

**Enliniaj agoj** metas blokon `{ make … }` rekte ene de la ĵetono:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}
```

Ili estas rapide skribeblaj kaj taŭgaj por eta gramatiko aŭ unufoja skripto. La kosto estas, ke la ŝablono kaj la logiko estas implikitaj kune.

**Agoklaso** tenas la du apartaj — la gramatiko priskribas la formon, la agoklaso priskribas la signifon:

```raku
grammar Sum {
    token TOP { <a> '+' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class SumActions {
    method TOP($/) { make $<a>.made + $<b>.made }
    method a($/)   { make $/.Int }
    method b($/)   { make $/.Int }
}
```

Ĉi tiu apartigo havas verajn avantaĝojn, kiam gramatiko kreskas: la ŝablono restas legebla, kaj vi povas pari **unu gramatikon kun pluraj agoklasoj** — unu, kiu taksas, unu, kiu bele presas, unu, kiu konstruas datumstrukturon — sen tuŝi la gramatikon entute.

La ĝenerala regulo: enliniaj agoj por io malgranda kaj unufoja, agoklaso por io ajn, kion vi prizorgos aŭ reuzos.

{% include nav.html %}
