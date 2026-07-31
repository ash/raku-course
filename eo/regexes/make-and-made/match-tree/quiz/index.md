---
title: Kvizo — La kongruarbo
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
grammar Point {
    token TOP { <x> ',' <y> }
    token x   { \d+ }
    token y   { \d+ }
}

say Point.parse('3,4')<y>;
```

{:.quiz}
0 | ｢3｣
1 | ｢4｣
0 | ｢3,4｣
0 | ｢y｣

{% include quiz.html %}

<div class="extended-explanation">

Ĉiu ĵetono fariĝas nomita branĉo de la kongruarbo. `<y>` sur la rezulto atingas la ĵetonon `y`, kiu kongruis kun `4`, do la programo presas `｢4｣`.

</div>

{% include nav.html %}
