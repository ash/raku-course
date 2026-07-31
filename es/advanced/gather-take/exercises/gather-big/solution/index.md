---
title: 'Solution: Recolectar hasta llenar'
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $sum = 0;
my @result = gather for 1..100 {
    $sum += $_;
    last if $sum > 10;
    take $_;
}

say @result;
```

🦋 Encuentra el programa en el archivo [gather-big.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/gather-big.raku).

## Salida

```
[1 2 3 4]
```

## Comentarios

1. Al bucle se le da un rango de cien números, muchos más de los que usará. Eso está bien porque el bucle se detiene solo: tan pronto como `$sum` supera `10`, `last` sale y los números restantes nunca se visitan.

1. El orden dentro del bloque importa. Primero sumamos a `$sum` y verificamos el limite antes de tomar, así que el numero que hace que el total supere `10` (aquí, `5`) no se recopila. El total acumulado llega exactamente a `10` después de `4`, así que la lista recopilada es `1, 2, 3, 4`.

1. Esta salida anticipada con `for` es lo que `gather`/`take` puede hacer y `grep` no: `grep` siempre recorre toda la lista, mientras que aquí elegimos cuando detenernos.

{% include nav.html %}
