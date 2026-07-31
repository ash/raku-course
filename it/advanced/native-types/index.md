---
title: Tipi nativi
---

{% include menu.html %}

I tipi che hai usato finora — `Int`, `Num`, `Str` — sono oggetti Raku completi: flessibili, introspezionabili e di dimensione arbitraria. Raku offre anche una famiglia parallela di tipi _nativi_ che corrispondono direttamente alla rappresentazione della macchina: `int`, `num`, `str` e un insieme di interi di dimensione fissa.

I tipi nativi si scrivono in minuscolo. Sacrificano la flessibilità in favore della velocità e di una dimensione fissa, e si comportano in modo leggermente diverso rispetto alle loro controparti boxed. Questa sezione mostra cosa sono e come la loro dimensione fissa porta all'overflow.

{% include nav.html %}
