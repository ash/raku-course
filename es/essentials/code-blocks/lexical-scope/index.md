---
title: Alcance léxico
---

{% include menu.html %}

Un bloque de código crea un llamado alcance léxico. Las variables declaradas en el bloque actual son visibles dentro de él, pero no después de que el programa salga del bloque. Considera un ejemplo:

```raku
{
    my $x = 42;
    say $x;
}

say $x;
```

La variable `$x` se crea en el bloque de código. La primera llamada de `say $x` imprime el valor de la variable ya que es visible dentro del bloque. La segunda `say $x` falla porque el nombre `$x` no existe fuera del bloque y no es conocido después de que terminó. El programa no se compila y obtienes un error:

    ===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
    Variable '$x' is not declared
    at /Users/ash/raku-course/t.raku:6
    ------> say ⏏$x;

{% include nav.html %}