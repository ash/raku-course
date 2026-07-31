---
title: 'Solución: Un contador'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub make-counter($step) {
    my $n = 0;
    return sub { $n += $step };
}

my &count = make-counter(10);
say count();
say count();
say count();
```

🦋 Puedes encontrar el código fuente en el archivo [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/counter.raku).

## Salida

```
10
20
30
```

## Comentarios

1. La clausura captura dos cosas de `make-counter`: el parámetro `$step` y la variable privada `$n`. Ambas siguen vivas después de que `make-counter` retorne.

1. Cada llamada suma `$step` a `$n` y devuelve el nuevo total. Un contador construido con un paso distinto avanzaría en esa cantidad.

{% include nav.html %}
