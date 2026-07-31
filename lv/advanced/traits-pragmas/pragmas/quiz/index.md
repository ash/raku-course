---
title: Viktorīna — Pragmas
translations_gpt:
---

{% include menu.html %}

Ar Raku noklusēto `strict` pragmu spēkā, kas notiek, kad piešķirat vērtību mainīgajam, kuru nekad neesat deklarējuši, kā `$x = 42`?

{:.quiz}
1 | Tā ir kompilēšanas laika kļūda
0 | Tas klusi izveido `$x`
0 | Tas izdrukā brīdinājumu, bet izpildās
0 | Tas iestata `$x` uz `Nil`

{% include quiz.html %}

<div class="extended-explanation">

`strict` ir ieslēgta pēc noklusējuma un pieprasa, lai katrs mainīgais tiktu vispirms deklarēts ar `my`, tāpēc `$x = 42` bez deklarācijas nevar tikt kompilēts — *Variable '$x' is not declared*. Izslēdzot pragmu ar `no strict`, piešķiršana tiktu pieņemta.

</div>

{% include nav.html %}
