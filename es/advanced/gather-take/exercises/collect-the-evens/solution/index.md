---
title: 'Solution: Repetir cada número'
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @result = gather for 1..4 -> $n {
    take $n for 1..$n;
};

say @result;
```

🦋 Encuentra el programa en el archivo [collect-the-evens.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/collect-the-evens.raku).

## Salida

```
[1 2 2 3 3 3 4 4 4 4]
```

## Comentarios

1. Nada obliga a un único `take` por iteración. Aquí el `take $n for 1..$n` interno ejecuta `take` un numero diferente de veces en cada pasada, que es exactamente la flexibilidad que hace a `gather`/`take` más poderoso que un simple `map`.

1. El bucle externo usa una variable con nombre `-> $n` a propósito. Si escribieramos el bucle interno con `$_`, el `for` interno reasignaría `$_` a su propio contador, y tomariamos el contador en lugar del numero actual.

1. `gather` simplemente recopila cada valor que fue tomado, en orden, así que `@result` termina conteniendo `1`, luego dos `2`, luego tres `3`, y luego cuatro `4`.

{% include nav.html %}
