---
title: Quiz — Praefixae sententiae
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
my $v;
quietly {
    say $v + 10;
}
```

{:.quiz}
0 | Monitum, deinde 10
1 | 10
0 | Nil
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

`10` ad indefinitum `$v` addere eum ut `0` tractat, dans `10`. Normaliter hoc etiam admonitionem "uninitialized value" imprimeret, sed praefixum `quietly` eam supprimit, ergo tantum `10` imprimitur.

</div>

{% include nav.html %}
