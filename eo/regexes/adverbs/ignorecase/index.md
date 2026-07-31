---
title: Kongruigo sen atento al uskleco
translations_gpt:
---

{% include menu.html %}

Normale regulesprimo distingas majusklojn de minuskloj: `/hello/` ne kongruas kun `HELLO`. La adverbo `:i` (mallongigo de `:ignorecase`) malŝaltas tiun distingon:

```raku
say 'HELLO' ~~ /:i hello/; # ｢HELLO｣
```

Kun `:i`, la literoj kongruas sendepende de uskleco, do la minuskla ŝablono kongruas kun la majuskla teksto. Ĝi funkcias en ambaŭ direktoj kaj ankaŭ por miksita uskleco:

```raku
say 'I use RAKU' ~~ /:i raku/; # ｢RAKU｣
```

Vi ankaŭ povas skribi la adverbon sur la operatoro `m///` anstataŭ ene de la ŝablono:

```raku
say 'HELLO' ~~ m:i/hello/; # ｢HELLO｣
```

Ambaŭ el ĉi tiuj igas la **tutan** ŝablonon ignori usklecon. La [sekva paĝo](/eo/regexes/adverbs/adverb-scope) rigardas pli detale, *kie* adverbo aplikiĝas — la diferencon inter la du lokoj — kaj kiel reŝalti usklecan sentemon por parto de ŝablono.

{% include nav.html %}
