---
title: 'Solution: Un cuadrado anónimo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say (1, 2, 3).map(sub ($x) { $x * $x });
```

🦋 Encuentra el programa en el archivo [anonymous-square.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/anonymous-square.raku).

## Salida

```
(1 4 9)
```

## Comentarios

1. El `sub ($x) { $x * $x }` no tiene nombre y nunca se almacena en una variable: se pasa directamente a `map` como su argumento.

1. `map` lo aplica a cada elemento de `1, 2, 3`, elevandolos al cuadrado para obtener `(1 4 9)`. Pasar una subrutina anonima en línea de esta manera es la razón más común para escribir una.

{% include nav.html %}
