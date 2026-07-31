---
title: Quiz — Quotatio
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
say q{a\nb};
```

{:.quiz}
1 | a\nb
0 | a<newline>b
0 | ab
0 | anb

{% include quiz.html %}

<div class="extended-explanation">

Operator `q` sicut apostrophi simplices operatur: effugia per obliquum reversum ut `\n` non processat. Itaque series omnes quattuor characteres `a`, `\`, `n`, `b` retinet. Solum forma interpolans ut `qq` (vel apostrophi duplices) `\n` in verum lineae finem converteret.

</div>

{% include nav.html %}
