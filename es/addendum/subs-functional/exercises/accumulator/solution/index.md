---
title: 'Solución: Un acumulador continuo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub make-accumulator($start) {
    my $total = $start;
    return -> $amount { $total += $amount };
}

my $acc = make-accumulator(100);

say $acc(10);
say $acc(25);
say $acc(-5);
```

🦋 Puedes encontrar el código fuente en el archivo [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/accumulator.raku).

## Salida

```
110
135
130
```

## Comentarios

1. El bloque devuelto *se cierra sobre* `$total`: esa variable sigue viva entre
llamadas, así que cada llamada recuerda el total de la anterior.

1. `$total += $amount` actualiza a la vez la suma acumulada y la devuelve, que es lo
que imprime cada `say`: `110`, después `135`, después `130`.

1. Una alternativa guarda el total dentro del propio bloque, en una variable `state`.
A diferencia de un `my` corriente, una variable `state` se inicializa una sola vez —la
primera vez que se ejecuta el bloque— y conserva después su valor entre llamadas
posteriores:

    ```raku
    sub make-accumulator($start) {
        return -> $amount { state $total = $start; $total += $amount };
    }

    my $acc = make-accumulator(100);
    say $acc(10);
    say $acc(25);
    say $acc(-5);
    ```

    Cada llamada a `make-accumulator` produce un bloque nuevo con su propio
    `state $total`, así que los acumuladores distintos siguen siendo independientes, y
    la clausura sobre `$start` sigue dando a cada uno su propio valor inicial.

{% include nav.html %}
