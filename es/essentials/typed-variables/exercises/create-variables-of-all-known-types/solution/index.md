---
title: 'Solution: Crear variables de todos los tipos conocidos'
---

{% include menu.html %}

Probablemente, este no es el tipo de programas que crearás en tu práctica. Sin embargo, es importante saber cómo inspeccionar las partes de programas reales.

## Código

Aquí tienes una posible solución que crea las variables de los cuatro tipos mencionados y muestra sus tipos.

```raku
my $a = 10;
my $b = 10.2;
my $c = 10e3;
my $d = True;
my $e = 'ten';

say $a, ' ', $a.WHAT;
say $b, ' ', $b.WHAT;
say $c, ' ', $c.WHAT;
say $d, ' ', $d.WHAT;
say $e, ' ', $e.WHAT;
```

🦋 Encuentra el programa en el archivo [types.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/types.raku).

## Salida

Este programa imprime la siguiente salida:

```console
$ raku exercises/data-types/types.raku
10 (Int)
10.2 (Rat)
10000 (Num)
True (Bool)
ten (Str)
```

{% include nav.html %}