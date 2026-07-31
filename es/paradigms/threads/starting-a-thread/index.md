---
title: Iniciar un hilo
translations_gpt:
---

{% include menu.html %}

`Thread.start` recibe un bloque y lo ejecuta en un hilo nuevo, devolviendo un objeto `Thread` que representa el trabajo en marcha:

```raku
my $t = Thread.start({ say 'hello from the thread' });
```

El bloque se ejecuta de forma concurrente con el código que sigue. El programa principal **no** lo espera automáticamente: continúa de inmediato, y el hilo hace su trabajo en segundo plano.

Un detalle pequeño pero importante: el argumento debe ser un bloque de código. Un par de llaves vacío `{ }` es un **hash** vacío, no un bloque vacío, así que un hilo siempre necesita un cuerpo que haga realmente algo:

```raku
my $t = Thread.start({ 2 + 2 }); # fine: a block with a body
```

Como el programa principal y el hilo corren ahora al mismo tiempo, no puedes fiarte del orden en que aparece su salida, a menos que esperes explícitamente a que el hilo termine, que es el tema del apartado siguiente.

{% include nav.html %}
