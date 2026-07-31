---
title: 'Solución: La cadena más larga'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @animals = 'cat', 'elephant', 'dog', 'fox';

say @animals.reduce(-> $a, $b { $b.chars > $a.chars ?? $b !! $a });
```

🦋 Puedes encontrar el código fuente en el archivo [longest-string.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/longest-string.raku).

## Salida

```
elephant
```

## Comentarios

1. El bloque se queda con el más largo de sus dos argumentos: `$a` es la cadena más larga vista hasta el momento, `$b` es la siguiente, y el ternario devuelve la que tenga más caracteres.

1. `reduce` arrastra ese ganador como `$a` a la llamada siguiente, así que tras recorrer la lista entera el valor acumulado es la más larga de todas: `elephant`.

{% include nav.html %}
