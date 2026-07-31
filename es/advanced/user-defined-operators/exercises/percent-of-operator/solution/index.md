---
title: 'Solution: Operador de porcentaje'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
sub infix:<percent-of>($p, $whole) {
    $whole * $p / 100
}

say 20 percent-of 150;
```

🦋 Puedes encontrar el código fuente en el archivo [percent-of-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/percent-of-operator.raku).

## Salida

```
30
```

## Comentarios

1. El operador toma el porcentaje `$p` como su operando izquierdo y la cantidad total `$whole` como su operando derecho.

1. Multiplicar `$whole` por `$p` y dividir entre `100` da la parte solicitada: `150 * 20 / 100` es `30`.

{% include nav.html %}
