---
title: 'Solución: Encauce los números grandes'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
(1..10) ==> grep(* > 5) ==> my @big;
say @big;
```

🦋 Puedes encontrar el código fuente en el archivo [feed-big-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-big-numbers.raku).

## Salida

```
[6 7 8 9 10]
```

## Comentarios

1. El flujo envía `1..10` a `grep`, que conserva los números mayores que `5`.

1. El resultado fluye hacia `@big`, el destino que cierra el flujo.

{% include nav.html %}
