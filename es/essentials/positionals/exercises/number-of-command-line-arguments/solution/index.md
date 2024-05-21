---
title: Solución de ‘El número de argumentos de línea de comandos’
---

{% include menu.html %}

La solución es bastante simple.

## Código

```raku
say @*ARGS.elems;
```

Alternativamente, puedes encadenar todos los métodos:

```raku
@*ARGS.elems.say;
```

🦋 Encuentra el programa en el archivo [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/number-of-command-line-arguments.raku).

## Salida

Este programa requiere una prueba de dos casos:

1. No se pasan argumentos.
1. Se pasa un número no nulo de argumentos.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
0

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
7
```

{% include nav.html %}