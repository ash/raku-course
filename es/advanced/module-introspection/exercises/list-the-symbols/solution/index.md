---
title: 'Solution: Listar los símbolos'
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

El programa, `list.raku`:

```raku
use Circle;

say Circle::.keys.elems;
say Circle::.keys.sort;
```

🦋 Encuentra ambos archivos fuente en el directorio [exercises/advanced/module-introspection/list-the-symbols](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/list-the-symbols).

## Salida

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Comentarios

1. `Circle::` es el paquete del módulo, y `.keys` lista los nombres que contiene, cada uno incluyendo su sigilo.

1. `.elems` cuenta esos nombres — el módulo define dos variables `our`, así que el conteo es `2`.

1. `.keys` no garantiza ningún orden en particular, así que aplicamos `.sort` para obtener un resultado estable y alfabético `($pi $tau)`. Sin ordenar, los dos nombres podrian aparecer en cualquier orden entre ejecuciones.

{% include nav.html %}
