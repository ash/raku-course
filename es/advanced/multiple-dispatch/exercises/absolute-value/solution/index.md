---
title: 'Solution: Valor absoluto'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
multi sub abs-value(Int $n where $n < 0) { -$n }
multi sub abs-value(Int $n)              { $n }

say abs-value(-7);
say abs-value(4);
```

🦋 Puedes encontrar el código fuente en el archivo [absolute-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/absolute-value.raku).

## Salida

```
7
4
```

## Comentarios

1. El primer candidato coincide solo con números negativos y devuelve el valor negado, que es positivo.

1. Cualquier otro número — el cero y los positivos — va al segundo candidato, que devuelve el valor sin cambios.

{% include nav.html %}
