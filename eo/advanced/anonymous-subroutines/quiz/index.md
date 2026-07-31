---
title: Kvizo — Pintaj blokoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
(-> $a, $b { $a * $b })(3, 4).say
```

{:.quiz}
1 | 12
0 | 7
0 | 34
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Pinta bloko povas listigi plurajn parametrojn: `-> $a, $b` akceptas du. Ĉi tie ĝi ne estas konservita en variablo — ĝi estas envolvita en krampoj kaj vokita tuj kun `(3, 4)`, ligante `$a` al `3` kaj `$b` al `4`. La bloko multiplikas ilin por doni `12`, kaj la postfiksa `.say` presas tion.

</div>

{% include nav.html %}
