---
title: 'Solución: Mayúsculas con react'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @collected;

react {
    whenever Supply.from-list('a', 'b', 'c') {
        @collected.push($_.uc);
    }
}

say @collected;
```

🦋 Puedes encontrar el código fuente en el archivo [react-upcase.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-upcase.raku).

## Salida

```
[A B C]
```

## Comentarios

1. El cuerpo del `whenever` se ejecuta una vez por valor, pasándolo a mayúsculas y añadiéndolo a `@collected`.

1. `react` espera a que el único supply termine, así que cuando se ejecuta el `say` el array ya contiene los tres valores en orden: `[A B C]`.

1. Un supply tiene sus propios métodos al estilo de las listas, así que podrías pasar a mayúsculas dentro del flujo en lugar de en el cuerpo — `whenever Supply.from-list('a', 'b', 'c').map(*.uc) { @collected.push($_) }` — y el efecto es el mismo. `.map` sobre un supply transforma cada valor según pasa; la elección es simplemente si la transformación pertenece al flujo o a la reacción.

{% include nav.html %}
