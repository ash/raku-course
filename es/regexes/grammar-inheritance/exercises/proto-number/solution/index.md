---
title: 'Solución: Un número con proto'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<dec> { \d+ }
    token number:sym<hex> { '0x' <[0..9a..f]>+ }
}

say Number.parse('0xff').defined;
```

🦋 Puedes encontrar el código fuente en el archivo [proto-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-number.raku).

## Salida

```
True
```

## Comentarios

1. El proto token `number` tiene dos variantes, `dec` y `hex`.

1. Para `0xff`, la variante `dec` empareja solo el `0` inicial, lo que dejaría fuera `xff`; la variante `hex` empareja el conjunto. El emparejamiento del token más largo elige por tanto `hex` y la cadena se analiza. La misma gramática sigue aceptando un decimal simple como `42`.

{% include nav.html %}
