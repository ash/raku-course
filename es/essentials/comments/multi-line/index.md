---
title: Comentarios de varias líneas
---

{% include menu.html %}

Tan pronto como desees dejar un comentario que sea más grande que una sola línea, puedes optar por tener algunos comentarios de una sola línea o un solo comentario de varias líneas.

Los comentarios de varias líneas comienzan con una combinación de dos caracteres ``#` `` y son seguidos por un par de caracteres de cierre `( )`, `{ }`, `[ ]`, o `< >` o sus copias repetidas: `(( ))`, `[[[ ]]]`, etc.

Por ejemplo:

```raku
my $name;
#`( Vamos a pedirle al usuario
que ingrese su nombre primero y luego
guardaremos la entrada en una variable. )

$name = prompt '¿Cuál es tu nombre? ';
#`{ El programa ahora espera
hasta que el usuario ingrese el nombre
y presione Enter. }

say $name; #`( Y ahora podemos imprimirlo )
```

{% include nav.html %}