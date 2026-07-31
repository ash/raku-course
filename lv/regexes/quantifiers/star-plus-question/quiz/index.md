---
title: Viktorīna — Pamata kvantifikatori
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma? Ievērojiet kvantoru `*` pie `a`.

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

`*` nozīmē «nulle vai vairāk», tāpēc `a*` labprāt piemeklē arī nevienu `a`. Virknē `br` starp `b` un `r` nav neviena `a`, taču raksturs tik un tā sakrīt, jo nulle atkārtojumu ir atļauta, dodot `｢br｣`.

</div>

{% include nav.html %}
