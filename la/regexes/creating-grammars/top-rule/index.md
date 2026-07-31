---
title: Regula TOP
translations_gpt:
---

{% include menu.html %}

Cum catenam grammatica analysas, Raku a tessera nomine `TOP` incipit. Ea est ianua — descriptio **totius** introitus. Cetera omnia in grammatica exsistunt ut ei serviant.

Tessera `TOP` plerumque ad alias tesseras nomine spectat, problema in minores partes frangens:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}
```

Lege `TOP` clara voce: «clavis, deinde signum aequalitatis, deinde valor». Tesserae `key` et `value` dicunt qualis unaquaeque illarum partium sit. Haec divisio est ipsa ratio grammaticae — unaquaeque tessera unum parvum, clare nominatum munus habet, et `TOP` eas componit.

`TOP` sola consuetudo est a `.parse` firmata; ceterae tesserae quomodocumque vis nominari possunt. Nomina quae eligis etiam capturae nominatae in effectu fiunt, itaque grammatica bene nominata arborem congruentiae se ipsam describentem producit, ut mox videbis.

{% include nav.html %}
