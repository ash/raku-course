---
title: Quiz — Il caso base
translations_gpt:
---

{% include menu.html %}

Cosa succede se una subroutine ricorsiva non ha un caso base raggiungibile?

{:.quiz}
0 | Restituisce `Nil`
0 | Restituisce `0`
1 | Non smette mai di chiamare se stessa e alla fine fallisce
0 | Il compilatore si rifiuta di eseguirla

{% include quiz.html %}

<div class="extended-explanation">

Senza un caso base raggiungibile, ogni chiamata ne fa un'altra senza fine. La ricorsione non termina mai e il programma alla fine esaurisce lo stack delle chiamate e fallisce. È il caso base a permettere alla ricorsione di fermarsi.

</div>

{% include nav.html %}
