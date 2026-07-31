---
title: Quiz — Pasar subrutinas
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
sub negate($n) { -$n }

sub apply(&f, $x) {
    f($x);
}

say apply(&negate, 7);
```

{:.quiz}
1 | -7
0 | 7
0 | 0
0 | &negate

{% include quiz.html %}

<div class="extended-explanation">

Una subrutina con nombre se pasa con el sigilo `&`, así que `&negate` entrega a `apply` la propia subrutina en lugar de llamarla. Dentro, `f(7)` la ejecuta, dando `-7`.

</div>

{% include nav.html %}
