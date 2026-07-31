---
title: El entorno
translations_gpt:
---

{% include menu.html %}

Todo programa se inicia con un conjunto de _variables de entorno_: valores con nombre como `HOME`, `PATH` o `USER` que aporta el sistema operativo. En Raku están disponibles en el hash dinámico `%*ENV`:

```raku
say %*ENV<HOME>; # the home directory, e.g. /home/anna
```

Lees una variable de entorno indexando `%*ENV` con su nombre. Como es un hash ordinario, también puedes comprobar si una variable está definida, o cambiarla para los programas que lances:

```raku
%*ENV<GREETING> = 'Hello';
say %*ENV<GREETING>; # Hello
```

Fijar una clave en `%*ENV` la añade al entorno que heredará cualquier programa que arranques después con `run` o `shell`, y así es como pasas configuración a un programa hijo:

```raku
%*ENV<GREETING> = 'Hello';

my $proc = run 'sh', '-c', 'echo $GREETING', :out;
say $proc.out.slurp(:close).chomp; # Hello
```

La variable se fija en el entorno de tu programa *antes* de lanzar al hijo, así que la shell que arranca `run` ya tiene `GREETING` en su propio entorno y puede devolverlo con echo. Cualquier variable que fijes así llega a todos los programas que inicies después.

El twigil `*` te indica que `%*ENV` es una variable dinámica, como `$*OUT` de la parte sobre entrada y salida. Algunas otras variables con asterisco describen el mundo del programa en ejecución: `@*ARGS` contiene los argumentos de la línea de comandos y `$*PROGRAM-NAME` es el nombre del propio guion. Juntas permiten que un programa entienda el contexto en el que se lo lanzó.

{% include nav.html %}
