---
title: Viktorīna — Citēšana
---

{% include menu.html %}

Ko izdrukā šī programma?

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

Operators `q` darbojas kā vienpēdiņas: tas neapstrādā atpakaļsvītras aizbēgšanas secības, piemēram, `\n`. Tāpēc virknē paliek visas četras rakstzīmes `a`, `\`, `n`, `b`. Tikai interpolējošā forma, piemēram, `qq` (vai dubultpēdiņas), pārvērstu `\n` par īstu jaunrindu.

</div>

{% include nav.html %}
