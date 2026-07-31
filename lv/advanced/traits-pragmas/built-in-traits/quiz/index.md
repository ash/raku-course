---
title: Viktorīna — Īpašības
---

{% include menu.html %}

Kura īpašība ļauj apakšprogrammai **mainīt izsaucēja mainīgo** caur parametru?

{:.quiz}
1 | `is rw`
0 | `is copy`
0 | `is default`
0 | none — parameters are writable by default

{% include quiz.html %}

<div class="extended-explanation">

Parametrs pēc noklusējuma ir tikai lasāms, tāpēc tam nevar piešķirt vērtību. `is rw` sasaista parametru ar izsaucēja paša mainīgo, tāpēc izmaiņas apakšprogrammas iekšienē ir redzamas ārpusē. `is copy` tā vietā dotu modificējamu *kopiju*, atstājot izsaucēja mainīgo neskartu.

</div>

{% include nav.html %}
