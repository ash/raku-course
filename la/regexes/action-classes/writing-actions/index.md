---
title: Classem actionum scribere
translations_gpt:
---

{% include menu.html %}

Classis actionum classis ordinaria est cum una methodo pro unaquaque tessera grammaticae. Unaquaeque methodus congruentiam illius tesserae ut `$/` accipit, et `make` vocat ut valorem adfigat — exacte quod clausula inserta agebat, sed ab exemplari seiunctum:

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

Grammatica nunc solum exemplar continet; omnis significatio in `SumActions` habitat. Animadverte quomodo methodi cooperentur: `a` et `b` utraque integrum `make`, et `TOP` illos per `$<a>.made` et `$<b>.made` legit summamque eorum facit.

Ut classe actionum utaris, trade exemplar ad `.parse` per argumentum nominatum `actions`, deinde effectum summum per `.made` lege:

```raku
say Sum.parse('2+3', actions => SumActions.new).made; # 5
```

Dum grammatica analysat, methodus uniuscuiusque tesserae sponte currit et valorem ab imo sursum aedificat. Effectus in congruentia summa est valor quem vis — hic numerus `5`.

{% include nav.html %}
