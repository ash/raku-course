---
title: 'Solución: Máximo común divisor y mínimo común múltiplo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my ($a, $b) = 24, 36;

my $g = $a gcd $b;

say "gcd = $g";
say "lcm = { $a * $b div $g }";
```

🦋 Puedes encontrar el código fuente en el archivo [gcd-lcm.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/gcd-lcm.raku).

## Salida

```
gcd = 12
lcm = 72
```

## Comentarios

1. `gcd` es un operador infijo integrado, así que `$a gcd $b` da directamente el máximo
común divisor.

1. El mínimo común múltiplo es el producto de los dos números dividido por su máximo
común divisor, calculado dentro de la interpolación `{ ... }` con la división entera `div`.

{% include nav.html %}
