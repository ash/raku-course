---
title: Spatia significantia
translations_gpt:
---

{% include menu.html %}

Intra regex spatia ex more neglecta sunt — ibi solum sunt ut exemplar legibile reddant. Ea de causa `/foo bar/` `foobar` congruit. Interdum tamen revera vis spatium in exemplari significare «hic spatium album est». Adverbium `:s` (breviter pro `:sigspace`, «spatium significans») id exacte agit:

```raku
say so 'foo    bar' ~~ /:s foo bar/; # True
say so 'foobar'     ~~ /:s foo bar/; # False
```

Cum `:s` spatium inter `foo` et `bar` in exemplari spatium album inter duo verba in catena postulat. Unum vel plura spatia (vel tabulationes) omnia valent, itaque series spatiorum in `'foo    bar'` congruit.

Spatium significans praecipue momenti fit apud grammaticas, ubi tibi permittit exemplaria scribere quae ut lingua quam analysas leguntur. Ei rursus occurres ut differentiae inter `token` et `rule`.

{% include nav.html %}
