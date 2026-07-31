---
title: 'Solución: Recíproco suave'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub reciprocal($n) {
    fail 'no reciprocal of zero' if $n == 0;
    return 1 / $n;
}

say reciprocal(4);
say reciprocal(0) // 'undefined';
```

🦋 Puedes encontrar el código fuente en el archivo [soft-divide.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/soft-divide.raku).

## Salida

```
0.25
undefined
```

## Comentarios

1. `reciprocal(4)` devuelve `1 / 4`, es decir `0.25`, con normalidad.

1. `reciprocal(0)` llama a `fail`, así que devuelve un `Failure`, que no está definido. El operador `//` devuelve su operando derecho siempre que el izquierdo no esté definido, así que obtenemos el repliegue `undefined`.

1. Usar `//` cuenta como manejar el fallo: comprueba la definición sin usar el valor, de modo que el `Failure` se mantiene blando y nunca se lanza como excepción real.

{% include nav.html %}
