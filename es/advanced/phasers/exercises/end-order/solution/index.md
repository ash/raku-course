---
title: 'Solution: El orden de los END'
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
END say 'first END';
END say 'second END';

say 'body';
```

🦋 Encuentra el programa en el archivo [end-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/end-order.raku).

## Salida

```
body
second END
first END
```

## Comentarios

1. Ambos phasers `END` se ejecutan después del código principal, por lo que `body` se imprime primero.

1. Múltiples phasers `END` se ejecutan en orden último en entrar, primero en salir: el `second END`, declarado después, se ejecuta antes que el `first END`. Esto refleja cómo la limpieza generalmente tiene que deshacer primero la configuración más reciente.

{% include nav.html %}
