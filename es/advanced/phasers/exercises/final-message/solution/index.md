---
title: 'Solution: Mensaje final'
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
my $count = 0;

END say "processed $count items";

$count++ for 1..3;
```

🦋 Encuentra el programa en el archivo [final-message.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/final-message.raku).

## Salida

```
processed 3 items
```

## Comentarios

1. El phaser `END` está escrito antes del bucle, pero se ejecuta al final — después de que el código principal ha terminado. Para entonces, `$count` ha sido incrementado tres veces.

1. Debido a que el phaser cierra sobre `$count`, lee el valor *final* de la variable, no el `0` que tenía cuando el phaser apareció en el código fuente. Esta es la razón habitual para poner un resumen en `END`.

{% include nav.html %}
