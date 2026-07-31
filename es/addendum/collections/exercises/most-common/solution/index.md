---
title: 'Solución: El elemento más frecuente'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @values = <a b a c a b>;

my %count;
%count{$_}++ for @values;

say %count.sort(-*.value)[0].key;
```

🦋 Puedes encontrar el código fuente en el archivo [most-common.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/most-common.raku).

## Salida

```
a
```

## Comentarios

1. Tras contabilizar cada valor en `%count`, ordenar los pares por `-*.value` pone
el más frecuente el primero; `[0].key` devuelve entonces ese elemento.

1. Raku puede hacer el recuento por ti con un [`Bag`](/es/advanced/sets-bags-mixes),
que cuenta cuántas veces aparece cada valor. Después `.max(*.value)` elige el
par con el recuento más alto, y `.key` es el elemento en sí:

    ```raku
    my @values = <a b a c a b>;

    say @values.Bag.max(*.value).key; # a
    ```

    El recuento entero es una sola llamada a un método, y no hay ningún hash
    explícito que gestionar.

{% include nav.html %}
