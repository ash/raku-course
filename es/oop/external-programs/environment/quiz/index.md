---
title: Quiz — El entorno
translations_gpt:
---

{% include menu.html %}

¿Qué variable contiene las variables de entorno del programa?

{:.quiz}
0 | `@*ARGS`
1 | `%*ENV`
0 | `$*ENV`
0 | `%ENV`

{% include quiz.html %}

<div class="extended-explanation">

`%*ENV` es el hash dinámico de las variables de entorno, que se leen por nombre como `%*ENV<HOME>`. `@*ARGS` contiene en cambio los argumentos de la línea de comandos.

</div>

{% include nav.html %}
