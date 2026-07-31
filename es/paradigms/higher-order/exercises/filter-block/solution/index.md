---
title: 'Solución: Filtrar con un bloque'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say (1..10).grep(* > 5).elems;
```

🦋 Puedes encontrar el código fuente en el archivo [filter-block.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/filter-block.raku).

## Salida

```
5
```

## Comentarios

1. `grep` recibe el bloque `* > 5` y conserva los números para los que es verdadero: `6, 7, 8, 9, 10`.

1. `.elems` los cuenta, dando `5`.

{% include nav.html %}
