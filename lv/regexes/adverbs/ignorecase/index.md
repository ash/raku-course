---
title: Saskaņošana neatkarīgi no burtu reģistra
translations_gpt:
---

{% include menu.html %}

Parasti regulārā izteiksme atšķir lielos burtus no mazajiem: `/hello/` nesakrīt ar `HELLO`. Apstākļvārds `:i` (saīsinājums no `:ignorecase`) šo atšķirību izslēdz:

```raku
say 'HELLO' ~~ /:i hello/; # ｢HELLO｣
```

Ar `:i` burti sakrīt neatkarīgi no lieluma, tāpēc mazo burtu raksturs sakrīt ar lielo burtu tekstu. Tas darbojas abos virzienos un arī jauktam burtu lielumam:

```raku
say 'I use RAKU' ~~ /:i raku/; # ｢RAKU｣
```

Apstākļvārdu var rakstīt arī uz operatora `m///`, nevis raksturā iekšienē:

```raku
say 'HELLO' ~~ m:i/hello/; # ｢HELLO｣
```

Abi šie varianti liek **visam** raksturam ignorēt burtu lielumu. [Nākamā lappuse](/lv/regexes/adverbs/adverb-scope) tuvāk aplūko, *kur* apstākļvārds darbojas — atšķirību starp abiem novietojumiem — un kā burtu lieluma jutību daļai raksturā ieslēgt atpakaļ.

{% include nav.html %}
