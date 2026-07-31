---
title: Kvizo — Propraj klasoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo? La klaso estas **neita**.

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

La klaso `<-[a..z]>` kongruas kun unu signo, kiu **ne** estas minusklo. Trairante `abc123` de maldekstre, la unuaj tri signoj estas minuskloj kaj estas preterlasataj; la unua signo, kiu ne estas minusklo, estas la cifero `1`, do la kongruo estas `｢1｣`.

</div>

{% include nav.html %}
