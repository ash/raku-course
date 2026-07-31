---
title: 'Solution: Un módulo de matemáticas'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución a la tarea. Usa dos archivos.

## Código

El módulo, `Maths.rakumod`:

```raku
unit module Maths;

sub square($n) is export {
    $n * $n
}
```

El programa, `maths.raku`:

```raku
use Maths;

say square(6);
```

🦋 Puedes encontrar ambos archivos fuente en el directorio [exercises/advanced/modules-basics/maths-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/maths-module).

## Salida

```console
$ raku -I. maths.raku
36
```

## Comentarios

1. El módulo marca `square` con `is export`, que es lo que la hace disponible para el programa que lo usa.

1. La opción `-I.` pone el directorio actual en la ruta de búsqueda de módulos, para que Raku encuentre `Maths.rakumod` junto al programa.

{% include nav.html %}
