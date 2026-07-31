---
title: Quiz — Recursio
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

`sum(4)` est `4 + sum(3)`, quod in `4 + 3 + 2 + 1` se explicat, id est `10`. Recursio ad casum fundamentalem consistit, cum `$n` ad `0` pervenit.

</div>

{% include nav.html %}
