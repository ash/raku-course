---
title: Quiz — Variables especiales
---

{% include menu.html %}

¿Qué variable integrada contiene los argumentos de línea de comandos del programa?

{:.quiz}
0 | `$*ARGS`
1 | `@*ARGS`
0 | `@*ARGV`
0 | `%*ENV`

{% include quiz.html %}

<div class="extended-explanation">

Los argumentos de línea de comandos vienen como una *lista*, así que la variable tiene el sigilo `@` y el twigil dinámico `*`: `@*ARGS`. `%*ENV` es el hash del entorno, no los argumentos, y `@*ARGV` es la forma de Perl, que Raku no usa.

</div>

{% include nav.html %}
