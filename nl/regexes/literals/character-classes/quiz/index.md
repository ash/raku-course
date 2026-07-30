---
title: 'Quiz — Eigen klassen'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af? De klasse is een **genegeerde** klasse.

```raku
say 'abc123' ~~ / <-[a..z]> /;
```

{:.quiz}
1 | ｢1｣
0 | ｢a｣
0 | ｢abc｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

De klasse `<-[a..z]>` matcht één teken dat **geen** kleine letter is. Als we `abc123` van links doorlopen, zijn de eerste drie tekens kleine letters en worden ze overgeslagen; het eerste teken dat geen kleine letter is, is het cijfer `1`, dus de match is `｢1｣`.

</div>

{% include nav.html %}
