---
title: 'Solution: Enlazar un escalar'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Code

```raku
my $source = 1;
my $bound := $source;
my $copy = $source;

$source = 9;
say $bound;
say $copy;
```

🦋 Puedes encontrar el código fuente en el archivo [bind-a-scalar.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/bind-a-scalar.raku).

## Salida

```
9
1
```

## Comentarios

1. La vinculación con `:=` hace que `$bound` sea otro nombre para el mismo contenedor que `$source`, en lugar de una copia. Por lo tanto, cambiar `$source` es visible a través de `$bound`, que imprime `9`.

1. La asignación ordinaria con `=` copia el valor en un contenedor separado, por lo que `$copy` no se ve afectado por el cambio posterior y sigue imprimiendo `1`.

1. Ver los dos lado a lado es precisamente el objetivo: `:=` comparte un contenedor, `=` duplica el valor.

{% include nav.html %}
