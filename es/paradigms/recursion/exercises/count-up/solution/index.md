---
title: 'Solución: Contar hacia arriba'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub countup($n) {
    return if $n < 1;
    countup($n - 1);
    say $n;
}

countup(3);
```

🦋 Puedes encontrar el código fuente en el archivo [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/count-up.raku).

## Salida

```
1
2
3
```

## Comentarios

1. El caso base `return if $n < 1` sigue deteniendo la recursión en cuanto la cuenta baja de cero.

1. Es el orden de las dos últimas líneas lo que hace que cuente *hacia arriba*: cada llamada recurre primero hasta el caso base y solo después imprime su propio número mientras las llamadas se desenrollan. Así, `1` se imprime primero y `$n` el último.

{% include nav.html %}
