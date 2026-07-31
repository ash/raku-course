---
title: 'Solución: Potencia'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub power($base, $exp) {
    $exp == 0 ?? 1 !! $base * power($base, $exp - 1);
}

say power(2, 10);
```

🦋 Puedes encontrar el código fuente en el archivo [power.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/power.raku).

## Salida

```
1024
```

## Comentarios

1. El caso base devuelve `1` cuando el exponente llega a `0`, ya que cualquier base elevada a cero es uno.

1. El paso recursivo multiplica `$base` por `power($base, $exp - 1)`, arrancando un factor cada vez. Así, `power(2, 10)` multiplica diez `2` entre sí, dando `1024`.

{% include nav.html %}
