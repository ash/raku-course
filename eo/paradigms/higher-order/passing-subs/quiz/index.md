---
title: Kvizo — Transdoni subprogramojn
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

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

Nomita subprogramo estas transdonata per la sigelo `&`, do `&negate` donas la subprogramon mem al `apply` anstataŭ voki ĝin. Ene, `f(7)` rulas ĝin, donante `-7`.

</div>

{% include nav.html %}
