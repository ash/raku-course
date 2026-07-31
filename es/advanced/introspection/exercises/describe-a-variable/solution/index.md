---
title: 'Solution: Describir una variable'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my Str $lang = 'Raku';

say $lang.^name;
say $lang.VAR.^name;
say $lang.VAR.name;
```

🦋 Encuentra el código fuente en el archivo [describe-a-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/describe-a-variable.raku).

## Salida

```
Str
Scalar
$lang
```

## Comentarios

1. `.^name` devuelve el tipo del valor almacenado en el contenedor, que es `Str`.

1. `.VAR` devuelve el contenedor subyacente, y `.^name` sobre él devuelve `Scalar`, el tipo del contenedor en sí.

1. `.VAR.name` devuelve el nombre de la variable, `$lang`, incluyendo su sigil. Observa que este es el método `name`, no el meta-método `^name` usado en las dos primeras líneas.

{% include nav.html %}
