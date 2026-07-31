---
title: Quiz — hyper
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
say (1..4).hyper.map(* ** 2);
```

{:.quiz}
0 | (16 9 4 1)
1 | (1 4 9 16)
0 | 30
0 | (1 2 3 4)

{% include quiz.html %}

<div class="extended-explanation">

`.hyper` `map` per fila diffundit sed effectus ordine originali servat, itaque prorsus ut `map` ordinarium se gerit — unumquodque elementum quadrare `(1 4 9 16)` dat.

</div>

{% include nav.html %}
