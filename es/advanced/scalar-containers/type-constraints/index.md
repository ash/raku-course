---
title: Restricciones de tipo
translations_gpt:
---

{% include menu.html %}

En la [parte de Fundamentos](/es/essentials/typed-variables/type-constraints/), viste como establecer el tipo de una variable usando una restricción de tipo. Vale la pena destacar que es el _contenedor_ el que impone esta restricción sobre los valores que se le permite aceptar.

La siguiente declaración crea un contenedor escalar que solo puede albergar enteros:

```raku
my Int $int;
```

Un contenedor con tipo acepta solo los valores que se ajustan a su tipo, por lo que todas las siguientes asignaciones son válidas:

```raku
my Int $int;

$int = 123;       # directly an integer
say $int;

$int = 100 + 23;  # the result is an integer
say $int;

$int = '123'.Int; # a string converted to an integer
say $int;
```

Raku no realiza conversión automática de tipos en este caso. Asignar un numero de punto flotante (que es un valor `Rat` en Raku) no esta permitido:

```raku
my Int $int;
$int = 123.45;
```

Ya obtienes un error en tiempo de compilación:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable ($int) of
type Int.  You can declare the variable to be of type Real, or try to
coerce the value with 123.45.Int or Int(123.45), or just write the value
as 123.
at t.raku:2
------> <BOL>⏏$int = 123.45;
```

Para evitar el error, convierte el valor explícitamente:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

No te confundas con los dos puntos en `123.45.Int`. El primero es el punto decimal; el segundo llama al método `Int` sobre el valor racional (`Rat`).

{% include nav.html %}
