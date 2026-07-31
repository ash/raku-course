---
title: 'Solution: Operador de promedio'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
sub infix:<avg>($a, $b) {
    ($a + $b) / 2
}

say 4 avg 10;
```

🦋 Puedes encontrar el código fuente en el archivo [average-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/average-operator.raku).

## Salida

```
7
```

## Comentarios

1. El operador se declara como `infix:<avg>`, por lo que se escribe entre sus dos operandos, igual que `+` o `~`.

1. El cuerpo suma los dos operandos y divide entre dos. Para `4` y `10` el resultado es `7`.

{% include nav.html %}
