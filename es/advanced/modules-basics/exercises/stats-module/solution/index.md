---
title: 'Solution: Usar un módulo de estadísticas'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución a la tarea.

## Código

El programa, `stats.raku`:

```raku
use Stats;

my @scores = 10, 20, 30, 40;

say "total: { total(@scores) }";
say "mean: { mean(@scores) }";
```

🦋 Puedes encontrar ambos archivos fuente en el directorio [exercises/advanced/modules-basics/stats-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/stats-module).

## Salida

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Comentarios

1. Un solo `use Stats` trae *ambas* subrutinas exportadas a la vez — `use` importa todo lo que el módulo marca con `is export`, no solo un nombre.

1. `mean` llama a `total` dentro del módulo. El programa nunca llama a `total` por su cuenta allí, pero aun así funciona: las subrutinas de un módulo pueden depender unas de otras, y el llamador solo ve los nombres exportados.

1. Con cuatro números que suman `100`, la media es `100 / 4`, que es `25`.

{% include nav.html %}
