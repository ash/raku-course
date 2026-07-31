---
title: 'Solución: Maneje y continúe'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
for <ok bad ok> -> $item {
    {
        die 'boom' if $item eq 'bad';
        say "processed $item";

        CATCH {
            default {
                say "skipped ($item): {.message}";
            }
        }
    }
}
```

🦋 Puedes encontrar el código fuente en el archivo [handle-and-continue.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/handle-and-continue.raku).

## Salida

```
processed ok
skipped (bad): boom
processed ok
```

## Comentarios

1. El phaser `CATCH` está dentro del bloque que trata cada elemento, así que maneja un `die` solo para ese elemento. Como la excepción se maneja ahí, nunca escapa hasta detener todo el bucle.

1. Este es el uso típico de `CATCH` frente a `try`: un fallo en una iteración se resuelve localmente y el bucle pasa al elemento siguiente. El elemento del medio falla, pero los dos elementos `ok` se procesan igualmente.

{% include nav.html %}
