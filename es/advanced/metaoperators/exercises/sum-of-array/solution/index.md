---
title: 'Solution: Promedio de un array'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @data = 10, 20, 30, 40;

say ([+] @data) / @data.elems;
```

🦋 Puedes encontrar el código fuente en el archivo [sum-of-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/sum-of-array.raku).

## Salida

```
25
```

## Comentarios

1. El meta-operador de reducción `[+]` coloca el operador `+` entre todos los elementos de `@data`, por lo que `[+] @data` es equivalente a `10 + 20 + 30 + 40`, es decir, `100`. Los paréntesis son necesarios para que la reducción ocurra antes de la división.

1. Al dividir la suma entre `@data.elems`, el numero de elementos, se obtiene el promedio `25`. Si el resultado no hubiera sido exacto, Raku habría producido un `Rat` exacto en lugar de redondear.

{% include nav.html %}
