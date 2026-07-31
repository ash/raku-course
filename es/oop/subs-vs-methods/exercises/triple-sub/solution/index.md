---
title: 'Solución: Triplicar como subrutina'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub triple($x) {
    $x * 3;
}

say triple(7);
```

🦋 Puedes encontrar el código fuente en el archivo [triple-sub.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-sub.raku).

## Salida

```
21
```

## Comentarios

1. Como subrutina, `triple` es una operación aislada: recibe como argumento el valor sobre el que trabajar.

1. El ejercicio hermano resuelve la misma tarea como método, para que puedas comparar ambos enfoques.

{% include nav.html %}
