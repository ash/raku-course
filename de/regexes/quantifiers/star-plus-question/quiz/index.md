---
title: 'Quiz — Einfache Quantoren'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus? Beachten Sie den Quantor `*` am `a`.

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

`*` bedeutet „null oder mehr“, `a*` ist also durchaus damit zufrieden, gar kein `a` zu treffen. In `br` steht zwischen `b` und `r` kein `a`, das Muster trifft aber trotzdem, weil null Wiederholungen erlaubt sind, und ergibt `｢br｣`.

</div>

{% include nav.html %}
