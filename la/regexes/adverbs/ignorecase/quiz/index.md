---
title: Quiz — Litteras maiores neglegere
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit? Exemplar litteris maioribus scriptum est et textus litteris mixtis.

```raku
say 'Hello' ~~ /:i HELLO/;
```

{:.quiz}
1 | ｢Hello｣
0 | ｢HELLO｣
0 | True
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Adverbium `:i` distinctionem litterarum maiorum et minorum exstinguit, et in utramque partem operatur — hic exemplar maiusculum `HELLO` textum mixtum congruit. Effectus est textus congruens ut in catena apparet, `｢Hello｣`.

</div>

{% include nav.html %}
