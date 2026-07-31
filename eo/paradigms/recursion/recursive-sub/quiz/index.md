---
title: Kvizo — Rekursio
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

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

`sum(4)` estas `4 + sum(3)`, kio malvolviĝas al `4 + 3 + 2 + 1`, tio estas `10`. La rekursio haltas ĉe la baza kazo, kiam `$n` atingas `0`.

</div>

{% include nav.html %}
