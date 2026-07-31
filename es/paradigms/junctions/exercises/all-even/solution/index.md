---
title: 'Solución: Todos pares'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say so all(2, 4, 6) %% 2;
```

🦋 Puedes encontrar el código fuente en el archivo [all-even.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/all-even.raku).

## Salida

```
True
```

## Comentarios

1. La prueba autoenhebra: `%% 2` se aplica a cada valor, y la unión `all` exige que pasen todos.

1. Los tres números son pares, así que el resultado es `True`. Si aunque solo uno fuera impar, sería `False`.

{% include nav.html %}
