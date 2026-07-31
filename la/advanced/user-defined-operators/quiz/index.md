---
title: Quiz — Operatorem definire
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
sub infix:<times>($a, $b) { $a * $b }

say 6 times 7;
```

{:.quiz}
1 | 42
0 | 67
0 | times
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

`infix:<times>` novum operatorem definit qui inter duos operandos suos scribitur. Corpus eius eos multiplicat, ergo `6 times 7` ad `42` aestimatur — operator tantum subroutina nomine speciali est.

</div>

{% include nav.html %}
