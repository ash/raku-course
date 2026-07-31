---
title: Quiz — make
translations_gpt:
---

{% include menu.html %}

Dentro de un método de acción, ¿qué función adjunta un valor a la coincidencia actual?

{:.quiz}
1 | `make`
0 | `made`
0 | `take`
0 | `return`

{% include quiz.html %}

<div class="extended-explanation">

`make` guarda un valor en la coincidencia; `made` (o `.ast`) lo lee de vuelta después. Así que un método de acción calcula su resultado y se lo pasa a `make`.

</div>

{% include nav.html %}
