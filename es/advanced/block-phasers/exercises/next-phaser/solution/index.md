---
title: 'Solution: Después de cada paso'
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
my $sum = 0;

for 1..3 {
    NEXT say "sum so far: $sum";
    $sum += $_;
}
```

🦋 Encuentra el programa en el archivo [next-phaser.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/next-phaser.raku).

## Salida

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Comentarios

1. El phaser `NEXT` está escrito primero, pero se ejecuta al *final* de cada iteración, después de que el cuerpo ha sumado el número actual a `$sum`.

1. Así, después de la primera pasada `$sum` es `1`, después de la segunda es `3`, y después de la tercera es `6`. `NEXT` es el equivalente en bucles de ejecutar algo entre iteraciones, distinto de `FIRST` (una vez al inicio) y `LAST` (una vez al final).

{% include nav.html %}
