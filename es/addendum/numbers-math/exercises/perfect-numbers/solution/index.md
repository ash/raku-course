---
title: 'Solución: Números perfectos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @perfect = (1..30).grep: -> $n {
    $n == [+] (1..^$n).grep($n %% *)
};

say @perfect;
```

🦋 Puedes encontrar el código fuente en el archivo [perfect-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/perfect-numbers.raku).

## Salida

```
[6 28]
```

## Comentarios

1. `(1..^$n).grep($n %% *)` conserva los números menores que `$n` que lo dividen sin
resto: sus divisores propios. El `%% *` es una función Whatever que comprueba la
divisibilidad.

1. `[+]` suma esos divisores, y el `grep` exterior conserva solo los números que son
iguales a esa suma.

{% include nav.html %}
