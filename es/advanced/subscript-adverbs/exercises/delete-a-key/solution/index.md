---
title: 'Solution: Eliminar una clave'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
```

🦋 Encuentra el código fuente en el archivo [delete-a-key.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/delete-a-key.raku).

## Salida

```
2
```

## Comentarios

1. El adverbio `:delete` elimina la entrada del hash (aquí ignoramos el valor que devuelve).

1. El hash comenzó con tres entradas y ahora tiene `2`, lo que confirma que se eliminó una. Contar con `.elems` mantiene la salida predecible sin depender del orden de las claves.

{% include nav.html %}
