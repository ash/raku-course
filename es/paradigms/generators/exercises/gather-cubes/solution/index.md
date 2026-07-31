---
title: 'Solución: Recoja los cubos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
```

🦋 Puedes encontrar el código fuente en el archivo [gather-cubes.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-cubes.raku).

## Salida

```
[1 8 27 64]
```

## Comentarios

1. El `take` se ejecuta una vez por cada número, aportando su cubo (`$_ ** 3`).

1. El bloque `gather` evalúa a la lista de todos los valores tomados.

{% include nav.html %}
