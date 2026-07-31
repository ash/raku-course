---
title: Kvizo — Kaptoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
if 'ab12cd' ~~ / (\w+) (\d+) / {
    say "$0 $1";
}
```

{:.quiz}
0 | ab 12
1 | ab1 2
0 | ab12 cd
0 | 12 ab

{% include quiz.html %}

<div class="extended-explanation">

La avida `\w+` kongruas kun vortaj signoj tiom malproksimen, kiom ĝi povas, dum ĝi ankoraŭ lasas almenaŭ unu ciferon por `\d+`. Ĝi prenas `ab1`, kaj `\d+` poste kongruas kun la sola restanta cifero `2`. Do `$0` estas `ab1` kaj `$1` estas `2`.

</div>

{% include nav.html %}
