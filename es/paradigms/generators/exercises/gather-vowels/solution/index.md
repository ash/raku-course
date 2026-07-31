---
title: 'Solución: Recoger con una condición'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @vowels = gather {
    for 'education'.comb {
        take $_ if $_ ~~ / <[aeiou]> /;
    }
}

say @vowels;
```

🦋 Puedes encontrar el código fuente en el archivo [gather-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-vowels.raku).

## Salida

```
[e u a i o]
```

## Comentarios

1. `.comb` divide la palabra en caracteres sueltos que el bucle visita en orden.

1. `take` conserva un carácter solo cuando coincide con la clase de vocales, dando las vocales en el orden en que aparecen.

{% include nav.html %}
