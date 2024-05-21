---
title: Solución a '¡Hola, Interpolación!'
---

{% include menu.html %}

## Código

Aquí tienes una posible solución a este problema:

```raku
my $name = prompt '¿Cuál es tu nombre? ';
say "¡Hola, $name!";
```

🦋 Puedes encontrar el código fuente en el archivo [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-interpolation.raku).

## Salida

Ejecuta el programa, y este entrará en un modo en el que espera tu entrada. Después de que escribas el nombre y presiones Enter, el programa continuará e imprimirá el saludo:

```console
$ raku exercises/strings/hello-concatenation.raku
¿Cuál es tu nombre? Raku
¡Hola, Raku!
```

## Comentarios

Observa que esta vez, la cadena está entre comillas dobles. En las comillas dobles, las variables se interpolan, por lo que su contenido se coloca en la cadena.

{% include nav.html %}