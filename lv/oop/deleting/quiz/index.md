---
title: Viktorīna — Failu dzēšana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
mkdir 'data';
spurt 'data/x.txt', 'hi';
rmdir 'data';
say 'data'.IO.e;
```

{:.quiz}
1 | True
0 | False
0 | kļūda
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`rmdir` noņem tikai **tukšu** direktoriju. Šeit `data` joprojām satur `x.txt`, tāpēc `rmdir` nenoņem neko un atstāj direktoriju savā vietā. Tāpēc `.e` joprojām ziņo `True`. Lai direktoriju izdzēstu, vispirms noņemtu tās saturu (piemēram, ar `.unlink for 'data'.IO.dir`) un tikai tad izsauktu `rmdir`.

</div>

{% include nav.html %}
