---
title: 'Kvizo — `when`'
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
given 5 {
    when $_ > 0 { say 'positive' }
    when 5      { say 'five' }
}
```

{:.quiz}
1 | positive
0 | five
0 | ambaŭ liniojn
0 | nenion

{% include quiz.html %}

<div class="extended-explanation">

Bloko `when` aŭtomate *elsaltas* el la `given` post kiam ĝi kongruas — ne estas trafalado. `5` kontentigas la unuan kondiĉon `$_ > 0`, do `positive` estas presata kaj la dua `when 5` neniam estas atingata, kvankam ĝi ankaŭ estus kongruinta.

</div>

{% include nav.html %}
