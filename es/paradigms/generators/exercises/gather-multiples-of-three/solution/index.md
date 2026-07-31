---
title: 'Solución: Recoja los múltiplos de tres'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
```

🦋 Puedes encontrar el código fuente en el archivo [gather-multiples-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-multiples-of-three.raku).

## Salida

```
[3 6 9 12 15]
```

## Comentarios

1. El bucle visita todos los números, pero `take` solo se ejecuta cuando `$_ %% 3` es verdadero.

1. Así, en la lista se recogen únicamente los múltiplos de tres.

{% include nav.html %}
