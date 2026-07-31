---
title: Viktorīna — Klausīšanās
translations_gpt:
---

{% include menu.html %}

Kurš arguments liek `IO::Socket::INET` gaidīt ienākošos savienojumus, nevis zvanīt ārā uz serveri?

{:.quiz}
1 | `:listen`
0 | `:host`
0 | `:server`
0 | `:accept`

{% include quiz.html %}

<div class="extended-explanation">

`:listen` pārslēdz ligzdu servera režīmā, gaidot uz vietējās adreses un porta. Pēc tam jūs izsaucat `.accept`, lai paņemtu katru ienākošo savienojumu. (`.accept` ir metode, nevis konstruktora arguments.)

</div>

{% include nav.html %}
