---
title: 'Solution: ¡Hola, Concatenación!'
---

{% include menu.html %}

## Código

Aquí tienes una posible solución a este problema:

```raku
my $name = prompt '¿Cuál es tu nombre? ';
say '¡Hola, ' ~ $name ~ '!';
```

🦋 Puedes encontrar el código fuente en el archivo [hello-concatenation.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/hello-concatenation.raku).

## Salida

Ejecuta el programa, y entrará en un modo en el que espera tu entrada. Después de que escribas el nombre y presiones Enter, el programa continuará y mostrará el saludo:

```console
$ raku exercises/strings/hello-concatenation.raku
¿Cuál es tu nombre? Juan
¡Hola, Juan!
```

## Comentarios

Compara el programa con [la variante anterior](../../../../scalar-variables/exercises/greet-a-person/solution) donde pasamos tres cadenas a la rutina `say`:

```raku
say '¡Hola, ', $name, '!';
```

Esta vez, las tres partes se concatenan primero y luego se pasan a `say` como una sola cadena.

{% include nav.html %}