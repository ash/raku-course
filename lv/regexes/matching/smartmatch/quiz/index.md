---
title: Viktorīna — Viedā saskaņošana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma? Ievērojiet, ka šoreiz nav `so` un sakritība izmanto formu `m/.../`.

```raku
say 'the cat sat' ~~ m/sat/;
```

{:.quiz}
0 | True
0 | False
1 | ｢sat｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`m/sat/` piemeklē tāpat, kā to darītu `/sat/`. Bez `so`, kas to pārveidotu par Būla vērtību, gudrā sakritība atgriež pašu sakritības objektu, ko `say` izdrukā stūra iekavās kā `｢sat｣`.

</div>

{% include nav.html %}
