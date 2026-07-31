---
title: Viktorīna — Distribūcijas
translations_gpt:
---

{% include menu.html %}

Kurš fails apraksta Raku distribūciju — tās nosaukumu, versiju un to, ko tā nodrošina?

{:.quiz}
0 | `README.md`
1 | `META6.json`
0 | `Makefile`
0 | `distribution.cfg`

{% include quiz.html %}

<div class="extended-explanation">

Distribūciju apraksta `META6.json` — JSON fails tās augšējā direktorijā. Tā atslēga `provides` attēlo katru moduļa nosaukumu uz tā pirmkoda failu, un `depends` uzskaita citas distribūcijas, kas tai vajadzīgas.

</div>

{% include nav.html %}
