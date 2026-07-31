---
title: Viktorīna — Pavedieni
translations_gpt:
---

{% include menu.html %}

Ko atgriež `Thread.start`?

{:.quiz}
0 | Vērtību, ko radīja bloks
1 | `Thread` objektu, kas pārstāv notiekošo darbu
0 | `True`, ja pavediens tika palaists
0 | Neko — tas bloķē, līdz pavediens beidz darbu

{% include quiz.html %}

<div class="extended-explanation">

`Thread.start` palaiž bloku jaunā pavedienā un tūlīt atgriež `Thread` objektu. Galvenā programma turpina darboties; šo objektu jūs vēlāk izmantojat, lai sagaidītu pavediena pabeigšanu.

</div>

{% include nav.html %}
