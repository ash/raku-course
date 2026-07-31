---
title: Quiz — Congruentia
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Congruentia `cd` in indice `2` incipit (characteres numerantur `a`=0, `b`=1, `c`=2). Methodus `.from` illum locum initialem reddit, non textum congruentem.

</div>

{% include nav.html %}
