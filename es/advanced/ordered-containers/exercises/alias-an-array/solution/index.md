---
title: 'Solution: Crear un alias de un array'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Code

```raku
my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
```

🦋 Puedes encontrar el código fuente en el archivo [alias-an-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/alias-an-array.raku).

## Salida

```
[10 20 30 40]
```

## Comentarios

1. La vinculación `@alias := @original` hace que `@alias` sea otro nombre para el mismo contenedor de array, en lugar de una copia de él.

1. El cambio se realiza a través de `@original` esta vez, y es un cambio estructural: `push` agrega un elemento. Debido a que ambos nombres son exactamente el mismo contenedor, `@alias` también ve el nuevo elemento. Los dos nombres son completamente intercambiables: no importa cuál uses para leer o modificar el array.

{% include nav.html %}
