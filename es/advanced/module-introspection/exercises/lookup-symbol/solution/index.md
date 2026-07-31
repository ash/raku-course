---
title: 'Solution: Buscar un símbolo'
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

El programa, `lookup.raku`:

```raku
use Circle;

say Circle::{'$pi'};
```

🦋 Encuentra ambos archivos fuente en el directorio [exercises/advanced/module-introspection/lookup-symbol](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/lookup-symbol).

## Salida

```console
$ raku -I. lookup.raku
3.14
```

## Comentarios

1. `Circle::` es el stash del módulo, y usar un nombre como clave — `Circle::{'$pi'}` — obtiene el valor almacenado bajo el. La clave debe incluir el sigilo, tal como lo hacen los nombres listados.

1. Esto accede al mismo valor que el calificado `$Circle::pi`, pero como el nombre es una cadena ordinaria, puede ser calculado en tiempo de ejecución en lugar de escribirlo en el código fuente.

{% include nav.html %}
