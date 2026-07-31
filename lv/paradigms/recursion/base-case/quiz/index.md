---
title: Viktorīna — Bāzes gadījums
translations_gpt:
---

{% include menu.html %}

Kas notiek, ja rekursīvai apakšprogrammai nav sasniedzama bāzes gadījuma?

{:.quiz}
0 | Tā atgriež `Nil`
0 | Tā atgriež `0`
1 | Tā nekad nebeidz sevi izsaukt un galu galā avarē
0 | Kompilators atsakās to izpildīt

{% include quiz.html %}

<div class="extended-explanation">

Bez sasniedzama bāzes gadījuma katrs izsaukums veic vēl vienu izsaukumu bez gala. Rekursija nekad nebeidzas, un programmai galu galā beidzas izsaukumu steks un tā avarē. Tieši bāzes gadījums ļauj rekursijai apstāties.

</div>

{% include nav.html %}
