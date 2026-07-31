---
title: 'Solution: Un nombre anidado'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
module Outer {
    module Inner {
        our $base = 10;
        our sub doubled { $base * 2 }
    }
}

say $Outer::Inner::base;
say Outer::Inner::doubled();
```

🦋 Puedes encontrar el código fuente en el archivo [nested-name.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/nested-name.raku).

## Salida

```
10
20
```

## Comentarios

1. Anidar un espacio de nombres dentro de otro construye una ruta `::` más larga. Tanto la variable como la subrutina están a dos niveles de profundidad, en `Outer::Inner`.

1. El nombre completo `$Outer::Inner::base` accede a la variable, y `Outer::Inner::doubled()` accede a la subrutina a través de los mismos dos niveles. El nombre de una subrutina no lleva sigilo, por lo que a diferencia de la variable no tiene un `$` delante.

1. Ambos miembros se declaran con `our`, que es lo que los hace visibles fuera de su módulo. Una declaración con `my` los habría mantenido privados dentro de `Inner`.

{% include nav.html %}
