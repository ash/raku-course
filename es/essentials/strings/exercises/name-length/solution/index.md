---
title: 'Solution: Longitud del nombre'
---

{% include menu.html %}

## Código

Aquí está la solución a la tarea:

```raku
my $name = prompt '¿Cuál es tu nombre? ';
say $name.chars;
```

🦋 Puedes encontrar el código fuente en el archivo [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/name-length.raku).

## Salida

Ejecuta el programa e ingresa el nombre.

```console
$ raku exercises/strings/name-length.raku 
¿Cuál es tu nombre? Alexandra
9
```

## Comentarios

En este programa, obtenemos la longitud de la cadena llamando al método `chars` en la variable `$name`. Como la variable contiene una cadena, el método devuelve la longitud de la misma.

{% include nav.html %}