---
title: 'Quiz — Smartmatch'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af? Let erop dat er deze keer geen `so` staat en dat de match de vorm `m/.../` gebruikt.

```raku
say 'the cat sat' ~~ m/sat/;
```

{:.quiz}
0 | True
0 | False
1 | ｢sat｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`m/sat/` matcht op dezelfde manier als `/sat/` zou doen. Zonder `so` om het naar een boolean te dwingen, geeft de smartmatch het matchobject zelf terug, dat `say` tussen hoekhaken afdrukt als `｢sat｣`.

</div>

{% include nav.html %}
