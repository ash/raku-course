---
title: Viktorīna — Tvērumi
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

Rijīgais `\w+` piemeklē vārda rakstzīmes tik tālu, cik var, joprojām atstājot vismaz vienu ciparu priekš `\d+`. Tas paņem `ab1`, un `\d+` tad piemeklē atlikušo vienīgo ciparu `2`. Tātad `$0` ir `ab1` un `$1` ir `2`.

</div>

{% include nav.html %}
