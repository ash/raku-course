---
title: 'Solution: Entrar en un bloque'
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
for 1..2 {
    ENTER say '--entering';
    say "body $_";
}
```

🦋 Encuentra el programa en el archivo [enter-a-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/enter-a-block.raku).

## Salida

```
--entering
body 1
--entering
body 2
```

## Comentarios

1. `ENTER` se ejecuta cada vez que se entra al bloque, justo antes de su cuerpo. Como el bucle entra a su cuerpo una vez por iteración, `--entering` se imprime antes de cada línea `body`.

1. Esta es la diferencia entre `ENTER` y `FIRST`: `FIRST` se ejecutaría solo una vez para todo el bucle, mientras que `ENTER` se ejecuta en cada entrada.

{% include nav.html %}
