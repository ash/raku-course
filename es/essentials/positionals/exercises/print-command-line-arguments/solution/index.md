---
title: Solución de ‘Imprimir argumentos de la línea de comandos’
---

{% include menu.html %}

El programa obtiene los argumentos de la línea de comandos en el array `@*ARGS`. Por lo tanto, tenemos que iterar sobre sus elementos.

## Código

```raku
.say for @*ARGS;
```

🦋 Encuentra el programa en el archivo [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/print-command-line-arguments.raku).

## Salida

Ejecuta el programa y confirma que imprime los argumentos línea por línea:

```console
$ raku exercises/positionals/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}