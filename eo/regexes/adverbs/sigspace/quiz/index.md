---
title: Kvizo — Adverboj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo? Notu la adverbon `:s` kaj la serion de spacoj en la teksto.

```raku
say so 'hello   world' ~~ /:s hello world/;
```

{:.quiz}
1 | True
0 | False
0 | ｢hello   world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

La adverbo `:s` faras la spacon inter `hello` kaj `world` en la ŝablono signifa — ĝi postulas blankspacon tie. Unu aŭ pli da spacoj ĉiuj kalkuliĝas, do la serio de tri spacoj en la teksto kongruas kaj la rezulto estas `True`. Sen `:s`, la spaco en la ŝablono estus ignorata kaj la ŝablono serĉus `helloworld`.

</div>

{% include nav.html %}
