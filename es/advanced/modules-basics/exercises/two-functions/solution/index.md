---
title: 'Solution: Dos funciones en un módulo'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución a la tarea. Usa dos archivos.

## Código

El módulo, `Calc.rakumod`:

```raku
unit module Calc;

sub add($a, $b) is export {
    $a + $b
}

sub mul($a, $b) is export {
    $a * $b
}
```

El programa, `calc.raku`:

```raku
use Calc;

say add(3, 4);
say mul(3, 4);
```

🦋 Puedes encontrar ambos archivos fuente en el directorio [exercises/advanced/modules-basics/two-functions](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/two-functions).

## Salida

```console
$ raku -I. calc.raku
7
12
```

## Comentarios

1. Un módulo puede exportar tantas subrutinas como quieras; cada una lleva su propio trait `is export`.

1. Tanto `add` como `mul` están disponibles en el programa después de un solo `use Calc`.

{% include nav.html %}
