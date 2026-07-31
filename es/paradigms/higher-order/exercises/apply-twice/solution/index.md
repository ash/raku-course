---
title: 'Solución: Aplique dos veces'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
```

🦋 Puedes encontrar el código fuente en el archivo [apply-twice.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/apply-twice.raku).

## Salida

```
18
```

## Comentarios

1. El parámetro `&f` recibe una subrutina; el `f($x)` interior se alimenta al `f(...)` exterior.

1. Triplicar `2` da `6`, y triplicar otra vez da `18`.

{% include nav.html %}
