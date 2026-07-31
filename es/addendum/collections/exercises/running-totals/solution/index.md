---
title: 'Solución: Totales acumulados'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @numbers = 2, 4, 6, 8;

my $sum = 0;
my @totals = @numbers.map({ $sum += $_ });

say @totals;
```

🦋 Puedes encontrar el código fuente en el archivo [running-totals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/running-totals.raku).

## Salida

```
[2 6 12 20]
```

## Comentarios

1. El bloque mantiene un `$sum` acumulado en una variable fuera del map. Cada llamada
suma el elemento actual y devuelve el total nuevo, así que la lista mapeada es la
secuencia de sumas parciales.

1. Raku trae esto de fábrica. La [reducción triangular](/es/advanced/metaoperators/reduction)
`[\+]` conserva todas las sumas parciales, así que la solución entera es una sola expresión:

    ```raku
    my @numbers = 2, 4, 6, 8;
    say [\+] @numbers; # (2 6 12 20)
    ```

    Devuelve una `Seq`, así que su representación usa paréntesis — `(2 6 12 20)` — en
    lugar del `[2 6 12 20]` del array, pero los números son los mismos.

{% include nav.html %}
