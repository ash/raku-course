---
title: Kvizo — Bazaj kvantoroj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo? Notu la kvantoron `*` sur la `a`.

```raku
say 'br' ~~ / b a* r /;
```

{:.quiz}
1 | ｢br｣
0 | ｢bar｣
0 | False
0 | ｢b｣

{% include quiz.html %}

<div class="extended-explanation">

`*` signifas «nul aŭ pli», do `a*` volonte kongruas kun neniu `a` entute. En `br` ne estas `a` inter la `b` kaj la `r`, sed la ŝablono tamen kongruas, ĉar nul ripetoj estas permesitaj, donante `｢br｣`.

</div>

{% include nav.html %}
