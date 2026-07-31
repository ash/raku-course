---
title: 'Solution: Cuadrados'
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @squares = gather for 1..6 {
    take $_ ** 2 if $_ %% 2;
};

say @squares;
```

🦋 Encuentra el programa en el archivo [squares.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/squares.raku).

## Salida

```
[4 16 36]
```

## Comentarios

1. La condición `if $_ %% 2` decide *si* tomar, y `$_ ** 2` decide *que* tomar. Solo los números pares `2`, `4`, `6` pasan la condición.

1. Sus cuadrados `4`, `16`, `36` son los unicos valores pasados a `take`, así que `gather` recopila exactamente esos. Hacer el filtrado y la transformación juntos en un solo `take` es algo que un simple `map` no puede expresar de manera tan limpia.

{% include nav.html %}
