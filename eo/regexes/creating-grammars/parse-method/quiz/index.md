---
title: Kvizo — Krei gramatikojn
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
grammar Word {
    token TOP { \w+ }
}

say Word.parse('hello world').defined;
```

{:.quiz}
0 | True
1 | False
0 | ｢hello｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`.parse` sukcesas nur, kiam la gramatiko kongruas kun la **tuta** ĉeno. `\w+` kongruas kun `hello`, sed poste spaco kaj `world` restas, do la enigo ne estas plene konsumita: `.parse` redonas `Nil` kaj `.defined` estas `False`.

</div>

{% include nav.html %}
