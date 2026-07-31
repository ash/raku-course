---
title: 'Solución: Salida y error'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @data = 3, 5, 7;

my $sum = 0;
for @data -> $n {
    $sum += $n;
    $*ERR.say("running total: $sum");
}

$*OUT.say($sum);
```

🦋 Puedes encontrar el código fuente en el archivo [output-and-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/output-and-error.raku).

## Salida

En la pantalla aparecen los dos flujos: primero los totales acumulados y después el resultado final:

```
running total: 3
running total: 8
running total: 15
15
```

Si se descarta el error estándar, solo queda la salida real:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Comentarios

1. `$*OUT` y `$*ERR` son los manejadores de la salida estándar y del error estándar. Cada uno tiene su propio método `say`.

1. Cada vuelta del bucle añade el número siguiente y escribe el total acumulado en `$*ERR`; solo la suma final va a `$*OUT`. En la pantalla el progreso y el resultado se parecen, pero viajan por flujos distintos, y por eso redirigir el error estándar con `2>/dev/null` deja únicamente el `15` final.

{% include nav.html %}
