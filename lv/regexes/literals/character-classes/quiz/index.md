---
title: Viktorīna — Pašu veidotas klases
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma? Klase ir **noliegta**.

```raku
say 'abc123' ~~ / <-[a..z]> /;
```

{:.quiz}
1 | ｢1｣
0 | ｢a｣
0 | ｢abc｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Klase `<-[a..z]>` piemeklē vienu rakstzīmi, kas **nav** mazais burts. Pārlūkojot `abc123` no kreisās puses, pirmās trīs rakstzīmes ir mazie burti un tiek izlaistas; pirmā rakstzīme, kas nav mazais burts, ir cipars `1`, tāpēc sakritība ir `｢1｣`.

</div>

{% include nav.html %}
