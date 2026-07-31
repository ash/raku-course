---
title: 'Solución: Suma de dígitos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub sum-digits($n) {
    $n < 10 ?? $n !! $n % 10 + sum-digits($n div 10);
}

say sum-digits(1234);
```

🦋 Puedes encontrar el código fuente en el archivo [sum-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/sum-digits.raku).

## Salida

```
10
```

## Comentarios

1. El caso base es un número de un solo dígito, que es su propia suma de dígitos.

1. En caso contrario, `$n % 10` es el último dígito y `$n div 10` lo elimina; `1 + 2 + 3 + 4` es `10`.

{% include nav.html %}
