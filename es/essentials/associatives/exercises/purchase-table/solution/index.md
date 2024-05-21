---
title: 'Solución: Tabla de compras'
---

{% include menu.html %}

La tabla contiene un encabezado (que simplemente imprimes con un solo `say`) y una serie de filas con una estructura similar: nombre del artículo, precio del artículo, cantidad y el costo total de estos artículos.

Como deseas preservar el orden de las filas, un array es una buena opción para mantener los artículos. Entonces, cada línea de la tabla corresponde a un solo elemento de un array.

En el segundo nivel, un registro puede guardarse en una estructura hash con algunos campos nombrados: `name`, `price` y `quantity`.

El resto del programa consiste en iterar sobre los artículos, calcular los totales e imprimir las filas de la tabla.

## Código

Aquí tienes una de las posibles soluciones para esta tarea:

```raku
my @items = [
    {
        name => 'Chairs',
        price => 20.57,
        quantity => 4,
    },
    {
        name => 'Tables',
        price => 50.18,
        quantity => 1,
    }
];

say "Item\tPrice\tN\tTotal";
for @items -> $item {
    my $total = $item<price> * $item<quantity>;
    say "$item<name>\t\$$item<price>\t$item<quantity>\t\$$total";
}
```

🦋 Encuentra el programa en el archivo [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/purchase-table.raku).

## Salida

```console
$ raku exercises/associatives/purchase-table.raku
Item	Price	N	Total
Chairs	$20.57	4	$82.28
Tables	$50.18	1	$50.18
```

{% include nav.html %}