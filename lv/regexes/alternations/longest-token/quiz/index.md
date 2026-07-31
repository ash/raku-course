---
title: Viktorīna — Alternatīvas
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma? Ievērojiet vienkāršo svītru `|`.

```raku
say 'download' ~~ / down | download /;
```

{:.quiz}
1 | ｢download｣
0 | ｢down｣
0 | ｢load｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Vienkāršā svītra `|` izmanto garākā marķiera piemeklēšanu: kad vienā un tajā pašā vietā sakrīt vairāk nekā viena alternatīva, uzvar garākā. Lai gan `down` ir uzrakstīts pirmais un sakristu, `|` dod priekšroku garākajam `download`. Ar `||` tā vietā būtu uzvarējis `down`.

</div>

{% include nav.html %}
