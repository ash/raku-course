---
title: Variables especiales integradas
---

{% include menu.html %}

Raku predefine un conjunto de variables para ti. La mayoría de ellas son _dinámicas_ (el twigil `*`), así que — como viste con las [variables dinámicas](/es/advanced/special-variables/dynamic-variables) — puedes leerlas en cualquier lugar e incluso anularlas para un ámbito. Estas son las que usarás con más frecuencia.

## Flujos estándar

La entrada y salida fluyen a través de tres variables dinámicas: `$*OUT` (salida estándar), `$*ERR` (error estándar) y `$*IN` (entrada estándar). `say` y `print` escriben en `$*OUT`; para enviar texto al error estándar, llama al método sobre `$*ERR`:

```raku
$*OUT.say('normal output'); # goes to standard output
$*ERR.say('a diagnostic');  # goes to standard error
```

Como son dinámicas, redirigir `$*OUT` en un bloque envía la salida de todo lo que se llame dentro de ese bloque al nuevo destino — sin cambiar nada de ese código.

## El programa y su proceso

Algunas variables describen el programa en ejecución:

```raku
say $*PROGRAM-NAME; # the path of the script being run
say $*PID;          # the process id of this program
say $*CWD;          # the current working directory
```

Sus valores cambian de una ejecución a otra, por lo que aquí no se muestra una salida fija.

## Línea de comandos y entorno

Los argumentos y el entorno llegan en dos contenedores predefinidos:

* `@*ARGS` — la lista de argumentos de línea de comandos (los mismos que recibe una subrutina `MAIN`)
* `%*ENV` — las variables de entorno, como un hash

```raku
say @*ARGS.elems; # how many arguments were passed
say %*ENV<HOME>;  # the value of the HOME environment variable
```

Estas variables integradas te ahorran tener que configurar la misma información manualmente. Y como son dinámicas, buscadas a través de la pila de llamadas, cualquier variable integrada `$*` puede anularse para un ámbito exactamente como una variable `$*` propia.

Junto a estas variables dinámicas, Raku también tiene las variables integradas de tiempo de compilación `?` — `$?FILE` y `$?LINE` — que ya conociste en la página de [twigils](/es/advanced/special-variables/twigils).

{% include nav.html %}
