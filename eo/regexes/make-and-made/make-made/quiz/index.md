---
title: Kvizo — make kaj made
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
grammar G {
    token TOP    { <number> { make $<number>.Int ** 2 } }
    token number { \d+ }
}

say G.parse('5').made;
```

{:.quiz}
0 | ｢5｣
0 | 5
1 | 25
0 | 55

{% include quiz.html %}

<div class="extended-explanation">

La enlinia bloko konservas `$<number>.Int ** 2` sur la kongruo. La ĵetono kaptis `5`, konverti ĝin al la entjero `5` kaj kvadratigi ĝin donas `25`, kion `made` redonas.

</div>

{% include nav.html %}
