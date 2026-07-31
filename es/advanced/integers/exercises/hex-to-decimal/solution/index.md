---
title: 'Solution: Hexadecimal a decimal'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my $n = :16<1A>;

say $n;
say $n.base(16);
```

🦋 Encuentra el programa en el archivo [hex-to-decimal.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/hex-to-decimal.raku).

## Salida

```
26
1A
```

## Comentarios

1. La forma de raíz `:16<1A>` lee `1A` como un número en base 16, que equivale a `1 x 16 + 10 = 26`. La variable `$n` ahora contiene el entero simple.

1. `$n.base(16)` convierte ese entero de vuelta a una cadena en base 16, dando `1A` de nuevo, lo que confirma que leer una base e imprimir en una base son operaciones inversas.

{% include nav.html %}
