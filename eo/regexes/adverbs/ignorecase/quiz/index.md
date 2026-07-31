---
title: Kvizo — Ignori usklecon
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo? La ŝablono estas majuskla kaj la teksto estas miksuskla.

```raku
say 'Hello' ~~ /:i HELLO/;
```

{:.quiz}
1 | ｢Hello｣
0 | ｢HELLO｣
0 | True
0 | False

{% include quiz.html %}

<div class="extended-explanation">

La adverbo `:i` malŝaltas la distingon inter majusklo kaj minusklo, kaj ĝi funkcias en ambaŭ direktoj — ĉi tie la majuskla ŝablono `HELLO` kongruas kun la miksuskla teksto. La rezulto estas la kongruinta teksto tia, kia ĝi aperas en la ĉeno, `｢Hello｣`.

</div>

{% include nav.html %}
