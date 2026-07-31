---
title: 'Solución: Cree un multiplicador'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub multiplier($n) {
    sub ($x) { $x * $n };
}

my &double = multiplier(2);
my &triple = multiplier(3);

say double(7);
say triple(7);
```

🦋 Puedes encontrar el código fuente en el archivo [make-multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/make-multiplier.raku).

## Salida

```
14
21
```

## Comentarios

1. `multiplier(2)` devuelve una subrutina que recuerda que `$n` es `2`; `multiplier(3)` devuelve una subrutina distinta que recuerda `3`.

1. Cada subrutina devuelta conserva su propio `$n`, así que `double(7)` da `14` y `triple(7)` da `21`: dos funciones independientes construidas desde la misma fábrica.

{% include nav.html %}
