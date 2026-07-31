---
title: Viktorīna — Iteratora protokols
translations_gpt:
---

{% include menu.html %}

Ko atgriež `pull-one`, kad iteratoram vairs nav ko dot, un kā to pārbauda?

{:.quiz}
1 | `IterationEnd`, pārbaudot ar `=:=`
0 | `Nil`, pārbaudot ar `.defined`
0 | tukšu sarakstu `()`, pārbaudot ar `==`
0 | `0`, pārbaudot ar `=:=`

{% include quiz.html %}

<div class="extended-explanation">

Izsmelts iterators atgriež bākas objektu `IterationEnd`. Tā kā tas ir viens koplietots objekts, to pārbauda pēc identitātes ar `=:=` (*tā paša objekta* pārbaude), nevis pēc vērtības vai definētības. `for` cikls izmanto tieši šo pārbaudi, lai zinātu, kad apstāties.

</div>

{% include nav.html %}
