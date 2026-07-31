---
title: 'Solution: Comparar `say` y `put`'
---

{% include menu.html %}

## Código

Aquí tienes una de las posibles soluciones:

```raku
my Int $i = 42;
say $i;
put $i;

my Rat $r = 3/4;
say $r;
put $r;

my Num $n = 3e4;
say $n;
put $n;

my Str $s = 'Raku';
say $s;
put $s;

my @a = <this is an array>;
# say @a.WHAT;
say @a;
put @a;

my List $l = <this is a list>;
# say $l.WHAT;
say $l;
put $l;

my %h = A => 'alpha', B => 'beta';
say %h;
put %h;
```

Para mayor confianza, también puedes imprimir el tipo de la variable, por ejemplo, como se muestra para arrays y listas, para asegurarte de que has creado una variable del tipo deseado.

🦋 Encuentra el programa en el archivo [compare-say-and-put.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/built-in-functions-for-printing/compare-say-and-put.raku).

## Salida

La salida del programa mostrado arriba se muestra a continuación.

```console
$ raku exercises/built-in-functions-for-printing/compare-say-and-put.raku
42
42
0.75
0.75
30000
30000
Raku
Raku
[this is an array]
this is an array
(this is a list)
this is a list
{A => alpha, B => beta}
A	alpha
B	beta
```

## Comentarios

Al examinar la salida del programa, puedes ver claramente que no hay diferencia al imprimir tipos de datos simples como números y cadenas. Para tipos de datos agregados, `say` produce una salida un poco más 'ruidosa' en comparación con `put`. Por otro lado, para hashes, `put` los imprime como una tabla en comparación con una sola línea de `say`.

La diferencia entre el formato de salida está determinada por cómo los métodos `Str` y `gist` están implementados para el tipo en cuestión. Hablaremos más sobre esto más adelante en el curso.

{% include nav.html %}