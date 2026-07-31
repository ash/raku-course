---
title: Quiz — El operador de flujo
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

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

El flujo envía `1..6` a `grep(* > 3)`, que conserva `4, 5, 6`, y los guarda en `@big`. Así que `@big.elems` es `3`.

</div>

{% include nav.html %}
