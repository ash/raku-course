---
title: Quiz — Etiquetas de exportación
translations_gpt:
---

{% include menu.html %}

Un módulo declara `sub hello is export` y `sub goodbye is export(:partings)`. Después de `use Greeting :partings;`, ¿qué subrutinas puede el programa llamar directamente?

{:.quiz}
1 | Solo `goodbye`
0 | Solo `hello`
0 | Tanto `hello` como `goodbye`
0 | Ninguna de las dos

{% include quiz.html %}

<div class="extended-explanation">

Nombrar una etiqueta importa ese grupo *en lugar del* predeterminado, por lo que `:partings` trae `goodbye` pero deja `hello` fuera. Para obtener ambas, habría que pedir la etiqueta incorporada `:ALL` con `use Greeting :ALL;`.

</div>

{% include nav.html %}
