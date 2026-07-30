---
title: 'Quiz — Matchen'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

De match `cd` begint op index `2` (de tekens zijn genummerd `a`=0, `b`=1, `c`=2). De methode `.from` geeft die beginpositie terug, niet de gematchte tekst.

</div>

{% include nav.html %}
