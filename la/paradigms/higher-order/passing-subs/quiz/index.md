---
title: Quiz — Subprogrammata tradere
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Subprogramma nominatum sigillo `&` traditur, itaque `&negate` ipsum subprogramma ad `apply` tradit potius quam illud vocet. Intus `f(7)` illud currit, dans `-7`.

</div>

{% include nav.html %}
