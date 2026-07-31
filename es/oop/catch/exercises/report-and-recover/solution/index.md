---
title: 'Solución: Informe y recupérese'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $timeout = 30;

{
    die 'config missing';
    $timeout = 60;

    CATCH {
        default {
            say "warning: {.message}; keeping default";
        }
    }
}

say "timeout is $timeout seconds";
```

🦋 Puedes encontrar el código fuente en el archivo [report-and-recover.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/report-and-recover.raku).

## Salida

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Comentarios

1. Cuando el `die` lanza la excepción, el resto del bloque se abandona, así que la línea `$timeout = 60` nunca se ejecuta y `$timeout` conserva su valor por defecto `30`.

1. El `CATCH` maneja la excepción (imprimiendo un aviso), así que el programa no se detiene. Sigue adelante con el valor por defecto, que es exactamente lo que significa *recuperarse* de un error: tomar nota del problema, replegarse a algo seguro y continuar.

{% include nav.html %}
