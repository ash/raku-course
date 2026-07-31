---
title: Quiz — Classes propriae
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit? Classis **negata** est.

```raku
say 'abc123' ~~ / <-[a..z]> /;
```

{:.quiz}
1 | ｢1｣
0 | ｢a｣
0 | ｢abc｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Classis `<-[a..z]>` unum characterem congruit qui littera minuscula **non** est. `abc123` a sinistra percurrens, primi tres characteres litterae minusculae sunt et praetereuntur; primus character qui littera minuscula non est cifra `1` est, itaque congruentia est `｢1｣`.

</div>

{% include nav.html %}
