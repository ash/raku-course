---
title: Viktorīna — Konteksti
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my @a = 10, 20, 30;
say +@a;
```

{:.quiz}
0 | 60
1 | 3
0 | 10
0 | 10 20 30

{% include quiz.html %}

<div class="extended-explanation">

Prefikss `+` piespiedu kārtā uzliek skaitlisko kontekstu. Masīvam skaitliskā vērtība ir tā elementu skaits, tāpēc `+@a` ir `3`, nevis summa. Izmantojiet `~` virknes kontekstam (`10 20 30`) vai `[+]`, lai patiešām sasummētu elementus.

</div>

{% include nav.html %}
