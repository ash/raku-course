---
title: 'Solución: Ponga un prefijo al mensaje'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
{
    die 'timeout';

    CATCH {
        default {
            say 'Error: ' ~ .message;
        }
    }
}
```

🦋 Puedes encontrar el código fuente en el archivo [error-prefix.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/error-prefix.raku).

## Salida

```
Error: timeout
```

## Comentarios

1. El `.message` del objeto de excepción da el texto que se le pasó a `die`.

1. Concatenarlo tras `Error: ` construye la línea final. El objeto de excepción es solo un valor, así que puedes usar su mensaje como quieras.

{% include nav.html %}
