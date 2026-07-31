---
title: Quiz — El caso base
translations_gpt:
---

{% include menu.html %}

¿Qué ocurre si una subrutina recursiva no tiene un caso base alcanzable?

{:.quiz}
0 | Devuelve `Nil`
0 | Devuelve `0`
1 | Nunca deja de llamarse a sí misma y acaba fallando
0 | El compilador se niega a ejecutarla

{% include quiz.html %}

<div class="extended-explanation">

Sin un caso base alcanzable, cada llamada hace otra llamada sin fin. La recursión no termina nunca y el programa acaba agotando la pila de llamadas y fallando. Es el caso base lo que permite que la recursión se detenga.

</div>

{% include nav.html %}
