---
title: Kvizo — Transformi supply
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my @out;
Supply.from-list(1, 2, 3).map(* ** 2).tap(-> $v { @out.push($v) });
say @out;
```

{:.quiz}
0 | [1 2 3]
1 | [1 4 9]
0 | [2 4 6]
0 | 14

{% include quiz.html %}

<div class="extended-explanation">

`map(* ** 2)` produktas novan supply, kiu kvadratigas ĉiun valoron. La konekto kolektas `1, 4, 9` en `@out`.

</div>

{% include nav.html %}
