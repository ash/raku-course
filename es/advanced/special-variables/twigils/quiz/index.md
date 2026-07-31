---
title: Quiz — Twigils
---

{% include menu.html %}

¿Qué twigil marca una variable **dinámica**, buscada a través de la pila de llamadas?

{:.quiz}
1 | `*`
0 | `?`
0 | `!`
0 | `.`

{% include quiz.html %}

<div class="extended-explanation">

El twigil `*` marca una variable dinámica, como en `$*OUT` o `$*greeting`. El twigil `?` es para valores de tiempo de compilación, `!` para un atributo privado y `.` para el accesor de un atributo.

</div>

{% include nav.html %}
