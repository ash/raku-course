---
title: 'Solución: Transponga una matriz'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @matrix = [1, 2, 3], [4, 5, 6];

say [Z] @matrix;
```

🦋 Puedes encontrar el código fuente en el archivo [transpose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/transpose.raku).

## Salida

```
((1 4) (2 5) (3 6))
```

## Comentarios

1. El metaoperador de cremallera `Z` empareja elementos por posición. Usado como
reducción `[Z]`, encremallera todas las filas entre sí, convirtiendo las columnas en
filas: exactamente una trasposición.

{% include nav.html %}
