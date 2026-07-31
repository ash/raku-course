---
title: 'Solution: Compartir manzanas'
---

{% include menu.html %}

Aquí está la solución al problema.

## Código

```raku
my $N = 3;
my $K = 11;

my $gets = $K div $N;
my $remains = $K % $N;

say "Cada persona recibe $gets manzana(s).";
say "Quedan $remains manzana(s).";
```

🦋 Puedes encontrar el código completo en el archivo [apple-sharing.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/apple-sharing.raku).

## Salida

Con los números de entrada 3 y 11, el programa imprime la siguiente salida:

```console
$ raku exercises/numbers/apple-sharing.raku
Cada persona recibe 3 manzana(s).
Quedan 2 manzana(s).
```

Modifica el valor inicial de `$N` y `$K` para modelar otras situaciones:

* `$K` es múltiplo de `$N`, por ejemplo, `12` y `3`;
* `$K` es igual a `$N`;
* `$K` es menor que `$N`.

## Comentarios

En el programa, estamos usando dos operadores: `div` para realizar la división entera y `%` para obtener el resto de la división. Alternativamente, puedes hacer los cálculos de la siguiente manera:

```raku
my $gets = $K div $N;
my $remains = $K - $N * $gets;
```

También nota cómo se interpolan las variables en la cadena.

{% include nav.html %}