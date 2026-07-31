---
title: Quiz — Recursión
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
sub sum($n) {
    $n <= 0 ?? 0 !! $n + sum($n - 1);
}

say sum(4);
```

{:.quiz}
0 | 4
1 | 10
0 | 24
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

`sum(4)` es `4 + sum(3)`, que se desenrolla en `4 + 3 + 2 + 1`, es decir `10`. La recursión se detiene en el caso base, cuando `$n` llega a `0`.

</div>

{% include nav.html %}
