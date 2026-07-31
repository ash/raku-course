---
title: Signifaj spacoj
translations_gpt:
---

{% include menu.html %}

Ene de regulesprimo, spacoj estas normale ignorataj — ili estas tie nur por fari la ŝablonon legebla. Tial `/foo bar/` kongruas kun `foobar`. Foje, tamen, vi vere volas, ke spaco en la ŝablono signifu «estas blankspaco ĉi tie». La adverbo `:s` (mallongigo de `:sigspace`, «signifa spaco») faras ĝuste tion:

```raku
say so 'foo    bar' ~~ /:s foo bar/; # True
say so 'foobar'     ~~ /:s foo bar/; # False
```

Kun `:s`, la spaco inter `foo` kaj `bar` en la ŝablono postulas blankspacon inter la du vortoj en la ĉeno. Unu aŭ pli da spacoj (aŭ taboj) ĉiuj kalkuliĝas, do la serio de spacoj en `'foo    bar'` kongruas.

Signifa blankspaco fariĝas precipe grava ĉe gramatikoj, kie ĝi permesas al vi skribi ŝablonojn, kiuj legiĝas kiel la lingvo, kiun vi analizas. Vi renkontos ĝin denove kiel la diferencon inter `token` kaj `rule`.

{% include nav.html %}
