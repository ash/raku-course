---
title: La rutina put
---

{% include menu.html %}

Por defecto, la rutina `put` realiza la misma función que [`print`](../print) pero añade una nueva línea al final:

1. Convierte sus argumentos a una cadena llamando al método `Str` en ellos.
1. Añade un carácter de nueva línea.
1. Lo envía al flujo `STDOUT`.

Algunos ejemplos:

```raku
42.put;
put 'Alpha', 'Beta';

my @array = 3, 4, 5;
put @array;

my %hash = a => 'b', c => 'd';
%hash.put;
```

Las salidas del programa:

```console
$ raku t.raku
42
AlphaBeta
3 4 5
a	b
c	d
```

%%tipblock
## Una nueva línea de `put`

Los caracteres reales que se añaden después de la salida se toman del método `nl-out` del flujo de salida. Su valor predeterminado es `\n`.
%%/tipblock

{% include nav.html %}