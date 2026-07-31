---
title: Quiz — Quantificatores
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Quantificator `** 2..3` duas vel tres repetitiones permittit et, avidus cum sit, tot capit quot potest — tres. Quarta `a` non congruens relinquitur.

</div>

{% include nav.html %}
