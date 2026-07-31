---
title: Quiz — Flujos
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
(10, 20, 30) ==> map(* + 5) ==> my @r;
say @r;
```

{:.quiz}
1 | [15 25 35]
0 | [10 20 30]
0 | [15]
0 | 35

{% include quiz.html %}

<div class="extended-explanation">

El flujo envía la lista a `map(* + 5)`, que suma cinco a cada elemento, y recoge el resultado en `@r`. Así que `@r` es `[15 25 35]`.

</div>

{% include nav.html %}
