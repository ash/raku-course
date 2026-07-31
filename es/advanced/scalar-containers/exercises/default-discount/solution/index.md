---
title: 'Solution: Descuento predeterminado'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $discount is default(0);
say $discount;

$discount = 15;
say $discount;
```

🦋 Encuentra el programa en el archivo [default-discount.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/default-discount.raku).

Por supuesto, una solución más simple sería inicializar directamente la variable con `0`:

```raku
my $discount = 0;
say $discount;

$discount = 15;
say $discount;
```

## Salida

```
0
15
```

## Comentarios

1. El trait `is default(0)` le da al contenedor un valor al que recurrir mientras no se le haya asignado nada. Leer la variable devuelve `0`, y, a diferencia de un valor por defecto no declarado, no produce una advertencia de _valor no inicializado_.

1. Después de la asignación, el contenedor contiene `15`, y el valor por defecto ya no juega ningún papel.

{% include nav.html %}
