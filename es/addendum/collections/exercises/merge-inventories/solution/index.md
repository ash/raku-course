---
title: 'Solución: Fusione dos inventarios'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my %shop-a = apples => 3, pears => 2;
my %shop-b = apples => 4, plums => 5;

my %total;
for %shop-a, %shop-b -> %shop {
    %total{$_} += %shop{$_} for %shop.keys;
}

say %total.sort.map({ "{.key}: {.value}" }).join(', ');
```

🦋 Puedes encontrar el código fuente en el archivo [merge-inventories.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/merge-inventories.raku).

## Salida

```
apples: 7, pears: 2, plums: 5
```

## Comentarios

1. Recorrer ambos hashes y hacer `%total{$_} += ...` suma cada cantidad al total
acumulado, haya aparecido antes la clave o no: una clave ausente parte de cero.

1. `%total.sort` ordena los pares por clave, y el `.map` formatea cada uno como
`clave: valor` antes de unirlos.

{% include nav.html %}
