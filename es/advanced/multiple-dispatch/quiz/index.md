---
title: Quiz — Despacho con `where`
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
multi sub f(Int $n where $n %% 2) { say 'even' }
multi sub f(Int $n)               { say 'odd' }

f(4);
```

{:.quiz}
1 | even
0 | odd
0 | both
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

`4` satisface la condición `where $n %% 2`, así que se elige el candidato más específico y se imprime `even`. El candidato con `Int` simple es el comodín para todo lo que no cumple la condición.

</div>

{% include nav.html %}
