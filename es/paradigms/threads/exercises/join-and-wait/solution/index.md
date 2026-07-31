---
title: 'Solución: Una y espere'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
```

🦋 Puedes encontrar el código fuente en el archivo [join-and-wait.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/join-and-wait.raku).

## Salida

```
first
second
```

## Comentarios

1. `.finish` se bloquea hasta que el hilo ha impreso `first`.

1. Solo entonces continúa el programa principal e imprime `second`, así que el orden está garantizado. Sin `.finish`, las dos líneas podrían aparecer en cualquier orden.

{% include nav.html %}
