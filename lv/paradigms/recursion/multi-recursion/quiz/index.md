---
title: Viktorīna — Rekursija ar multi apakšprogrammām
translations_gpt:
---

{% include menu.html %}

Doti `multi fact(0) { 1 }` un `multi fact($n) { $n * fact($n - 1) }`. Kāda loma ir kandidātam `multi fact(0)`?

{:.quiz}
1 | Tas ir bāzes gadījums — kandidāts, ko despečs izvēlas, kad arguments ir `0`
0 | Tas uzstāda noklusēto vērtību, kas tiek atgriezta katram argumentam
0 | Tas izpildās pirmais katrā izsaukumā, pirms otrā kandidāta
0 | Tā ir obligāta sintakse, ko Raku izpildes laikā ignorē

{% include quiz.html %}

<div class="extended-explanation">

Literālis `0` parakstā liek šim kandidātam sakrist tikai tad, kad arguments ir tieši `0`. Tas ir bāzes gadījums, izteikts kā sava apakšprogramma: kamēr arguments ir lielāks, despečs turpina izvēlēties `multi fact($n)`, un, tiklīdz rekursija sasniedz `0`, tas pārslēdzas uz `multi fact(0)` un apstājas.

</div>

{% include nav.html %}
