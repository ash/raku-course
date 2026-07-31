---
title: Actiones insertae et classes actionum
translations_gpt:
---

{% include menu.html %}

Nunc duos modos habes significationem analysi adfigendi. Quo uti debes?

**Actiones insertae** clausulam `{ make … }` intra ipsam tesseram ponunt:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}
```

Celeriter scribuntur et pro parva grammatica vel scripto unius usus sufficiunt. Pretium est quod exemplar et logica inter se implicantur.

**Classis actionum** duo seiungit — grammatica formam describit, classis actionum significationem:

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

Haec separatio veras utilitates habet dum grammatica crescit: exemplar legibile manet, et **unam grammaticam cum pluribus classibus actionum** coniungere potes — unam quae aestimat, unam quae eleganter imprimit, unam quae structuram datorum aedificat — sine grammatica omnino tacta.

Regula pollicis: actiones insertae pro re parva et abicienda, classis actionum pro quolibet quod servabis vel iterum adhibebis.

{% include nav.html %}
