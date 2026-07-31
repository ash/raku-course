---
title: Quiz — Operator fluxus
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
(1..6) ==> grep(* > 3) ==> my @big;
say @big.elems;
```

{:.quiz}
0 | 6
1 | 3
0 | 4
0 | 2

{% include quiz.html %}

<div class="extended-explanation">

Fluxus `1..6` in `grep(* > 3)` mittit, quod `4, 5, 6` servat, eaque in `@big` reponit. Itaque `@big.elems` est `3`.

</div>

{% include nav.html %}
