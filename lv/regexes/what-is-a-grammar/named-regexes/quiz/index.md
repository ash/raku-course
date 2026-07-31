---
title: Viktorīna — Nosauktas regulārās izteiksmes
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my regex letter { <[a..z]> }

'a1' ~~ / <letter> /;
say $<letter>;
```

{:.quiz}
1 | ｢a｣
0 | ｢1｣
0 | ｢a1｣
0 | ｢letter｣

{% include quiz.html %}

<div class="extended-explanation">

Izsaucot nosauktu regulāro izteiksmi kā `<letter>`, tā tiek gan piemeklēta, gan rezultāts satverts ar šo nosaukumu. Raksturs atrod pirmo mazo burtu `a`, tāpēc `$<letter>` ir `｢a｣`.

</div>

{% include nav.html %}
