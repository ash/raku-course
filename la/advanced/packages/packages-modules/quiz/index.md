---
title: Quiz — Fasciculi
translations_gpt:
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
module M {
    my $x = 5;
}

say $M::x.defined;
```

{:.quiz}
1 | False
0 | True
0 | 5
0 | Errorem

{% include quiz.html %}

<div class="extended-explanation">

`$x` cum `my` declarata est, itaque lexicalis est et numquam in spatium nominum `M` intrat. Via `$M::x` ergo nihil invenit — valorem indefinitum — et `.defined` est `False`. Solum variabilis `our` hoc modo attingibilis esset.

</div>

{% include nav.html %}
