---
title: 'Solución: Una tubería de flujo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
(1..8)
    ==> grep(* > 3)
    ==> map(* * 2)
    ==> my @result;

say @result;
```

🦋 Puedes encontrar el código fuente en el archivo [feed-pipeline.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-pipeline.raku).

## Salida

```
[8 10 12 14 16]
```

## Comentarios

1. La primera etapa conserva los números mayores que `3` (es decir, `4, 5, 6, 7, 8`); la segunda duplica cada uno.

1. Cada `==>` pasa su resultado a la etapa siguiente, y la última lo recoge en `@result`.

{% include nav.html %}
