---
title: 'Solution: Un operador de elevar al cuadrado'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
sub postfix:<²>($x) {
    $x ** 2
}

say 5²;
```

🦋 Puedes encontrar el código fuente en el archivo [square-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/square-operator.raku).

## Salida

```
25
```

## Comentarios

1. El operador se declara como `postfix:<²>`, por lo que su símbolo, el carácter de superíndice dos, se escribe después de su operando, como en `5²`.

1. El cuerpo eleva el operando a la potencia de dos, así que `5²` se evalúa como `25`. Nada te impide usar un símbolo Unicode que refleje la notación matemática.

{% include nav.html %}
