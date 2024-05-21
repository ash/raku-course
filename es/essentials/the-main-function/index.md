---
title: La función MAIN
---

{% include menu.html %}

Un programa en Raku no necesita ningún ritual de código plantilla, por lo que puedes comenzar a escribir instrucciones útiles de inmediato. Esta parte del programa, que se encuentra en el nivel superior a cualquier [bloque de código](/es/essentials/code-blocks) (incluyendo [funciones](/es/essentials/functions), por ejemplo), se llama _mainline_.

Si el programa contiene una función con el nombre especial `MAIN`, Raku ejecuta esta función después de compilar todo y después de que el código mainline haya sido ejecutado.

```raku
say '1. Código mainline';

sub MAIN {
    say '3. MAIN llamado';
}

say '2. También mainline';
```

Este programa primero ejecuta los `say` de nivel superior, y luego llama a `MAIN`:

```console
$ raku t.raku
1. Código mainline
2. También mainline
3. MAIN llamado
```

Por supuesto, también es posible tener un programa con la función `MAIN` y sin otro código mainline.

{% include nav.html %}