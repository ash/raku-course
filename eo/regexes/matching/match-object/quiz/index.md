---
title: Kvizo — Kongruigo
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my $m = 'abcdef' ~~ /cd/;
say $m.from;
```

{:.quiz}
0 | ｢cd｣
1 | 2
0 | 3
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

La kongruo `cd` komenciĝas ĉe indekso `2` (la signoj estas numeritaj `a`=0, `b`=1, `c`=2). La metodo `.from` redonas tiun komencan pozicion, ne la kongruintan tekston.

</div>

{% include nav.html %}
