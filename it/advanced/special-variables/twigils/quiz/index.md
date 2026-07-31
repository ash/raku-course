---
title: Quiz — Twigil
---

{% include menu.html %}

Quale twigil contrassegna una variabile **dinamica**, cercata attraverso lo stack delle chiamate?

{:.quiz}
1 | `*`
0 | `?`
0 | `!`
0 | `.`

{% include quiz.html %}

<div class="extended-explanation">

Il twigil `*` contrassegna una variabile dinamica, come in `$*OUT` o `$*greeting`. Il twigil `?` e' per i valori in fase di compilazione, `!` per un attributo privato e `.` per l'accessore di un attributo.

</div>

{% include nav.html %}
