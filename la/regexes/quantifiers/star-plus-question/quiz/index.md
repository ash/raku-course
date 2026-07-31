---
title: Quiz — Quantificatores fundamentales
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit? Nota quantificatorem `*` in `a`.

```raku
say 'br' ~~ / b a* r /;
```

{:.quiz}
1 | ｢br｣
0 | ｢bar｣
0 | False
0 | ｢b｣

{% include quiz.html %}

<div class="extended-explanation">

`*` significat «nulla vel plura», itaque `a*` libenter nullam `a` omnino congruit. In `br` nulla `a` inter `b` et `r` est, sed exemplar tamen congruit quia nullae repetitiones permittuntur, dans `｢br｣`.

</div>

{% include nav.html %}
