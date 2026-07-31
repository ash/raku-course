---
title: Viktorīna — Kvantifikatori
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

Kvantors `** 2..3` atļauj divus vai trīs atkārtojumus un, būdams rijīgs, paņem tik, cik var, — trīs. Ceturtais `a` paliek nesakritināts.

</div>

{% include nav.html %}
