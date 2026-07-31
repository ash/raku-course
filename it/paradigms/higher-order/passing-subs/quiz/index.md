---
title: Quiz — Passare subroutine
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

Una subroutine con nome si passa con il sigillo `&`, quindi `&negate` consegna ad `apply` la subroutine stessa invece di chiamarla. All'interno, `f(7)` la esegue, dando `-7`.

</div>

{% include nav.html %}
