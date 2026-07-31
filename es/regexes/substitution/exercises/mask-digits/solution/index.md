---
title: 'Solución: Enmascare los dígitos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $orig = 'PIN 1234';
say S:g/\d/#/ given $orig;
say $orig;
```

🦋 Puedes encontrar el código fuente en el archivo [mask-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/mask-digits.raku).

## Salida

```
PIN ####
PIN 1234
```

## Comentarios

1. El `S///` en mayúscula hace el mismo trabajo que `s///` pero **devuelve una cadena nueva** en lugar de cambiar la variable en el sitio. Con `:g` reemplaza cada dígito `\d` por un `#` en la copia devuelta. Se aplica a `$orig` con `given`, que fija la cadena como tema.

1. Imprimir `$orig` después muestra que sigue conteniendo `PIN 1234`: a diferencia de `s///`, el original quedó intacto.

{% include nav.html %}
