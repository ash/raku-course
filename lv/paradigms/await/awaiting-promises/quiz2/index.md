---
title: Viktorīna — await un sleep
translations_gpt:
---

{% include menu.html %}

Ko dara šī programma?

```raku
my $p = start { sleep 2; 42 };
say 'waiting';
say await $p;
```

{:.quiz}
1 | Uzreiz izdrukā `waiting`, tad apmēram divas sekundes vēlāk izdrukā `42`
0 | Apstājas uz divām sekundēm, tad izdrukā `waiting` un `42` kopā
0 | Izdrukā `waiting` un `42` uzreiz — miegs notiek fonā
0 | Izdrukā `waiting`, tad `Promise` — guļošu solījumu gaidīt nevar

{% include quiz.html %}

<div class="extended-explanation">

`start` atgriež solījumu **tūlīt** — bloks ar savu `sleep` izpildās fona pavedienā. Tāpēc `say 'waiting'` nostrādā uzreiz. Bloķē tieši `await`: programma tur apstājas, līdz fona bloks pabeidz savu divu sekunžu snaudu un rada `42`, ko tad izdrukā. Pauze pieder `await` rindai, nevis `start` rindai.

</div>

{% include nav.html %}
