---
title: 'Solución: Un multiplicador'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub multiplier($factor) {
    -> $x { $x * $factor };
}

my &triple = multiplier(3);
say triple(4);
```

🦋 Puedes encontrar el código fuente en el archivo [multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/multiplier.raku).

## Salida

```
12
```

## Comentarios

1. El bloque con flecha devuelto se cierra sobre `$factor`, recordando que es `3`.

1. Llamarlo con `4` da `12`.

{% include nav.html %}
