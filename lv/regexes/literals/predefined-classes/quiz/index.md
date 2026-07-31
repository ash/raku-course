---
title: Viktorīna — Rakstzīmju klases
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
say 'a_1 b' ~~ /\W/;
```

{:.quiz}
0 | ｢a｣
0 | ｢_｣
0 | ｢1｣
1 | ｢ ｣

{% include quiz.html %}

<div class="extended-explanation">

Klase `\W` piemeklē pirmo rakstzīmi, kas **nav** burts, cipars vai pasvītrojums. Rakstzīmes `a`, `_` un `1` visas ir vārda rakstzīmes, tāpēc pirmā ne-vārda rakstzīme ir atstarpe.

</div>

{% include nav.html %}
