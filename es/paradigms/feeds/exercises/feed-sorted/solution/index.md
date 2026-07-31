---
title: 'Solución: Ordenar con un flujo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
(3, 1, 2) ==> sort() ==> my @sorted;
say @sorted;
```

🦋 Puedes encontrar el código fuente en el archivo [feed-sorted.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-sorted.raku).

## Salida

```
[1 2 3]
```

## Comentarios

1. El flujo envía los tres números a `sort`, que los ordena.

1. El resultado ordenado fluye hacia `@sorted`.

{% include nav.html %}
