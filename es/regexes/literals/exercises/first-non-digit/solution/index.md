---
title: 'Solución: El primer carácter no numérico'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say '42abc' ~~ /\D/;
```

🦋 Puedes encontrar el código fuente en el archivo [first-non-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/first-non-digit.raku).

## Salida

```
｢a｣
```

## Comentarios

1. `\D` es lo contrario de `\d`: empareja cualquier carácter que no sea un dígito.

1. Los dos primeros caracteres son dígitos, así que la coincidencia empieza en `a`.

{% include nav.html %}
