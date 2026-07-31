---
title: Congruentia sine ratione litterarum maiorum
translations_gpt:
---

{% include menu.html %}

Ex more regex litteras maiores a minoribus distinguit: `/hello/` `HELLO` non congruit. Adverbium `:i` (breviter pro `:ignorecase`) illam distinctionem exstinguit:

```raku
say 'HELLO' ~~ /:i hello/; # ｢HELLO｣
```

Cum `:i` litterae congruunt sine ratione magnitudinis, itaque exemplar minusculum textum maiusculum congruit. In utramque partem operatur, et pro litteris mixtis quoque:

```raku
say 'I use RAKU' ~~ /:i raku/; # ｢RAKU｣
```

Adverbium etiam in operatore `m///` loco eius quod intra exemplar scribas ponere potes:

```raku
say 'HELLO' ~~ m:i/hello/; # ｢HELLO｣
```

Utrumque horum **totum** exemplar litteras neglegere facit. [Pagina sequens](/la/regexes/adverbs/adverb-scope) propius inspicit *ubi* adverbium valeat — differentiam inter duos locos — et quomodo rationem litterarum pro parte exemplaris rursus accendas.

{% include nav.html %}
