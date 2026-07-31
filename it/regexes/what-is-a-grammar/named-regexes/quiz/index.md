---
title: Quiz — Espressioni regolari con nome
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my regex letter { <[a..z]> }

'a1' ~~ / <letter> /;
say $<letter>;
```

{:.quiz}
1 | ｢a｣
0 | ｢1｣
0 | ｢a1｣
0 | ｢letter｣

{% include quiz.html %}

<div class="extended-explanation">

Chiamare un regex con nome come `<letter>` lo riconosce e ne cattura il risultato sotto quel nome. Lo schema trova la prima lettera minuscola, `a`, quindi `$<letter>` è `｢a｣`.

</div>

{% include nav.html %}
