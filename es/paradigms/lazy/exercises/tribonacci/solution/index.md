---
title: 'Solución: La sucesión de Tribonacci'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @trib = 1, 1, 1, * + * + * ... *;
say @trib[^8];
```

🦋 Puedes encontrar el código fuente en el archivo [tribonacci.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/tribonacci.raku).

## Salida

```
(1 1 1 3 5 9 17 31)
```

## Comentarios

1. La clausura `* + * + *` suma los tres elementos anteriores para producir el siguiente, así que hacen falta tres valores iniciales.

1. La secuencia es perezosa, de modo que guardarla en `@trib` y pedir `@trib[^8]` calcula solo los ocho primeros números.

{% include nav.html %}
