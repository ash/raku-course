---
title: La solución de 'Saludar a una persona'
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
my $name = prompt '¿Cuál es tu nombre? ';
say '¡Hola, ', $name, '!';
```

🦋 Puedes encontrar el código fuente en el archivo [greet-a-person.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/greet-a-person.raku).

## Salida

Ejecuta el programa e ingresa un nombre cuando se te pida:

```console
$ raku exercises/scalar-variables/greet-a-person.raku 
¿Cuál es tu nombre? Inge
¡Hola, Inge!
```

## Comentarios

1. Este programa usa una variable escalar `$name` para almacenar una cadena que fue ingresada por el usuario en respuesta al mensaje. Cuando la variable se usa en la lista que pasas a la rutina `say`, obtienes el nombre en un mensaje.

1. Hay una mejor manera de resolver este problema usando la interpolación de cadenas. Volvamos a este problema en breve.

{% include nav.html %}