---
title: 'Solution: Par, impar o cero'
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
my $n = 12;

given $n {
    when 0      { say 'zero' }
    when $_ %% 2 { say 'even' }
    default     { say 'odd' }
}
```

🦋 Encuentra el programa en el archivo [sign-of-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/sign-of-a-number.raku).

## Salida

```
even
```

## Comentarios

1. `when 0` coincide con el valor único cero. Va primero porque cero también es par, y queremos informarlo por separado.

1. `when $_ %% 2` es una condición, donde `$_` es el topico establecido por `given`: el operador `%%` comprueba si se divide exactamente entre dos. El valor `12` no es cero pero es divisible entre dos, por lo que el programa imprime `even`.

1. `default` cubre todo lo restante — los números que no son ni cero ni pares, es decir, los impares.

{% include nav.html %}
