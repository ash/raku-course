---
title: 'Solución: Factorización en primos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $n = 360;
my @factors;

for 2..$n -> $d {
    while $n %% $d {
        @factors.push($d);
        $n div= $d;
    }
}

say @factors;
```

🦋 Puedes encontrar el código fuente en el archivo [prime-factors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/prime-factors.raku).

## Salida

```
[2 2 2 3 3 5]
```

## Comentarios

1. Para cada divisor candidato `$d`, el `while` interior lo saca de `$n` tantas veces
como quepa, añadiendo `$d` cada vez. Como los factores más pequeños se eliminan
primero, todo `$d` que aún divida a `$n` tiene garantizado ser primo.

1. `$n div= $d` es una división entera de vuelta a `$n`; encoge el número hasta que no
queda más que `1`.

{% include nav.html %}
