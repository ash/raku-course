---
title: Viktorīna — Automātiskā pavedienošana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

Savienojuma reizināšana automātiski pavedienojas: `* 2` tiek piemērots katrai aiz savienojuma stāvošajai vērtībai, radot jaunu `any` savienojumu `any(2, 4, 6)`.

</div>

{% include nav.html %}
