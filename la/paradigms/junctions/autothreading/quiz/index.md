---
title: Quiz — Filatio automatica
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
my $j = 1 | 2 | 3;
say $j * 2;
```

{:.quiz}
0 | 12
0 | 6
1 | any(2, 4, 6)
0 | any(1, 2, 3)

{% include quiz.html %}

<div class="extended-explanation">

Iuncturam multiplicare automatice filat: `* 2` unicuique valori post iuncturam applicatur, novam iuncturam `any` `any(2, 4, 6)` producens.

</div>

{% include nav.html %}
