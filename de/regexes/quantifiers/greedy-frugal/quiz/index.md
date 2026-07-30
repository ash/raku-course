---
title: 'Quiz — Quantoren'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
say 'aaaa' ~~ / a ** 2..3 /;
```

{:.quiz}
0 | ｢aa｣
1 | ｢aaa｣
0 | ｢aaaa｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Der Quantor `** 2..3` erlaubt zwei oder drei Wiederholungen und nimmt, gierig wie er ist, so viele, wie er kann — drei. Das vierte `a` bleibt ungetroffen.

</div>

{% include nav.html %}
