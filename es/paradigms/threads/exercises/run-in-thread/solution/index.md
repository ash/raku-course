---
title: 'Solución: Ejecute en un hilo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $t = Thread.start({ say 'working' });
$t.finish;
```

🦋 Puedes encontrar el código fuente en el archivo [run-in-thread.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/run-in-thread.raku).

## Salida

```
working
```

## Comentarios

1. `Thread.start` ejecuta el bloque en un hilo nuevo.

1. `.finish` espera a que el hilo se complete, de modo que el programa no termina antes de imprimir `working`.

{% include nav.html %}
