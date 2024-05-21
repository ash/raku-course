---
title: La matriz @*ARGS
---

{% include menu.html %}

Hasta ahora, a medida que se introducen las matrices, es un buen momento para conocer una de las matrices integradas, `@*ARGS`. El `*` en su nombre es el segundo sigilo, o _twigil_, y veremos más de ellos en el futuro. Pero por ahora, aprovechemos las ventajas de usar esa matriz especial. Contiene los argumentos que el programa obtiene de la línea de comandos.

Considera la siguiente ejecución del programa:

```console
$ raku run.raku alpha beta
```

El programa `run.raku` obtiene dos parámetros: `alpha` y `beta`. Se pueden leer desde `@*ARGS`.

```raku
say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

Este programa imprime el número de argumentos que se le pasan y los propios argumentos:

```console
$ raku run.raku alpha beta
2
alpha
beta
```

Observa que el programa no requiere ningún cambio si lo llamas como un archivo ejecutable:

```console
$ ./run.raku alpha beta
```

El programa, en este caso, [debería tener un shebang](/es/essentials/running-programs/from-command-line), pero lo más importante es que los índices de `@*ARGS` aún comienzan con `0`:

```raku
#!/usr/bin/env raku

say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

{% include nav.html %}