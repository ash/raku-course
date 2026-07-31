---
title: Kvizo — Poziciaj kaptoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
if 'ab-cd' ~~ / (\w+) '-' (\w+) / {
    say $1;
}
```

{:.quiz}
0 | ｢ab｣
1 | ｢cd｣
0 | ｢ab-cd｣
0 | ｢-｣

{% include quiz.html %}

<div class="extended-explanation">

La du paroj de krampoj kaptas en `$0` kaj `$1`, numerite ekde nulo. La unua kaptas `ab`, la dua kaptas `cd`, do `$1` estas `｢cd｣`.

</div>

{% include nav.html %}
