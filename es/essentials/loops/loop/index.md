---
title: loop
---

{% include menu.html %}

La declaración `loop` es una construcción en Raku que tiene mucho en común con los bucles tradicionales en el lenguaje de programación C y sus derivados. Toma tres declaraciones: el inicializador, la prueba y la declaración para modificar la variable del bucle. El cuerpo del bucle se ejecuta repetidamente mientras la prueba permanezca `True`.

```raku
loop (my $c = 0; $c < 5; $c++) {
    say "El valor actual del contador es $c.";
}
```

Aquí, `++` es un operador postfijo que incrementa su argumento en 1. Cubriremos más operadores en la segunda parte del curso.

El programa ejecuta el cuerpo del bucle cinco veces.

```console
$ raku t.raku
El valor actual del contador es 0.
El valor actual del contador es 1.
El valor actual del contador es 2.
El valor actual del contador es 3.
El valor actual del contador es 4.
```

Algunas, o incluso todas, las declaraciones en el encabezado de `loop` pueden ser omitidas. Por ejemplo, aquí está el mismo programa:

```raku
my $c = 0;
loop (; $c < 5;) {
    say "El valor actual del contador es $c.";
    $c++;
}
```

## * * *

Los bucles `loop` son, probablemente, los bucles menos utilizados en Raku. Se pueden encontrar, por ejemplo, en un traductor automatizado de C a Raku. En Raku, sin embargo, hay bucles más útiles como `for`, que examinaremos muy pronto.

{% include nav.html %}