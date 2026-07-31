---
title: 'Solución: Un acumulador'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub make-accumulator {
    my $sum = 0;
    return -> $x { $sum += $x };
}

my &acc = make-accumulator;
acc(10);
say acc(5);
```

🦋 Puedes encontrar el código fuente en el archivo [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/accumulator.raku).

## Salida

```
15
```

## Comentarios

1. La clausura captura `$sum`, que sobrevive entre llamadas.

1. `acc(10)` deja el total en `10`; `acc(5)` suma cinco y devuelve `15`.

{% include nav.html %}
