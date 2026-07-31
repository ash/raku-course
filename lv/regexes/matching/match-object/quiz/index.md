---
title: Viktorīna — Saskaņošana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my $m = 'abcdef' ~~ /cd/;
say $m.from;
```

{:.quiz}
0 | ｢cd｣
1 | 2
0 | 3
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

Sakritība `cd` sākas indeksā `2` (rakstzīmes numurētas `a`=0, `b`=1, `c`=2). Metode `.from` atgriež šo sākuma pozīciju, nevis sakritušo tekstu.

</div>

{% include nav.html %}
