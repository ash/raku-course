---
title: 'Solution: Contar los distintos'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my @data = 3, 1, 4, 1, 5, 9, 2, 6, 5, 3;

say set(@data).elems;
```

🦋 Encuentra el programa en el archivo [count-the-distinct.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/count-the-distinct.raku).

## Salida

```
7
```

## Comentarios

1. Al pasar el array a `set` se construye un set con sus valores. Como un set solo conserva valores distintos, los números repetidos se reducen a uno solo.

1. El método `elems` devuelve entonces el número de valores distintos, que es `7`.

{% include nav.html %}
