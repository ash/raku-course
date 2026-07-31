---
title: Quiz — await y sleep
translations_gpt:
---

{% include menu.html %}

¿Qué hace el programa siguiente?

```raku
my $p = start { sleep 2; 42 };
say 'waiting';
say await $p;
```

{:.quiz}
1 | Imprime `waiting` enseguida, y unos dos segundos después imprime `42`
0 | Se detiene dos segundos y después imprime `waiting` y `42` juntos
0 | Imprime `waiting` y `42` enseguida: el sleep ocurre en segundo plano
0 | Imprime `waiting` y después `Promise`: no se puede esperar una promesa dormida

{% include quiz.html %}

<div class="extended-explanation">

`start` devuelve una promesa **de inmediato**: el bloque, con su `sleep`, corre en un hilo en segundo plano. Así que `say 'waiting'` se ejecuta al momento. Es `await` quien bloquea: el programa se detiene ahí hasta que el bloque en segundo plano termina su siesta de dos segundos y produce `42`, que entonces se imprime. La pausa pertenece a la línea del `await`, no a la del `start`.

</div>

{% include nav.html %}
