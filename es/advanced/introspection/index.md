---
title: Introspección de contenedores
---

{% include menu.html %}

La _introspección_ consiste en preguntarle a un valor o a un contenedor sobre sí mismo: su tipo, su contenedor subyacente y el mecanismo que hay detrás. Ya has utilizado una herramienta de introspección, `.^name`, para imprimir el tipo de un valor.

Raku ofrece una pequeña familia de estas herramientas, escritas en letras mayúsculas: `WHAT`, `VAR`, `WHO` y `HOW`. A veces se les llama _pseudo-métodos_, porque el compilador les da un significado especial en lugar de tratarlos como métodos ordinarios. Esta sección examina cada uno de ellos.

Como recordatorio, aquí tienes `.^name` mostrando cómo cambia el tipo de un contenedor sin tipo a medida que almacenas diferentes valores en él:

```raku
my $value;
say $value.^name; # Any

$value = 42;
say $value.^name; # Int

$value = 'forty-two';
say $value.^name; # Str
```

El contenedor comienza como `Any` y luego reporta el tipo del valor que contiene en ese momento.

{% include nav.html %}
