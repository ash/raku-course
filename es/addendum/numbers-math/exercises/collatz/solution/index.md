---
title: 'Solución: Pasos de Collatz'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $n = 27;
my $steps = 0;

while $n != 1 {
    $n = $n %% 2 ?? $n div 2 !! 3 * $n + 1;
    $steps++;
}

say $steps;
```

🦋 Puedes encontrar el código fuente en el archivo [collatz.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/collatz.raku).

## Salida

```
111
```

## Comentarios

1. El ternario `?? !!` elige el valor siguiente en una sola expresión: divide `$n` por
dos cuando es par (`$n %% 2`), y en caso contrario aplica `3 * $n + 1`.

1. `27` es un caso pequeño célebre que da un rodeo sorprendentemente largo — `111`
pasos — antes de asentarse por fin en `1`.

{% include nav.html %}
