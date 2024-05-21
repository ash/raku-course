---
title: Variables globales
---

{% include menu.html %}

Vamos a crear una variable antes del bloque de código:

```raku
my $x = 1;

{
    $x = 42;
    say $x;
}

say $x;
```

En este caso, `$x` es una variable global (está ubicada en el ámbito global), y el programa imprime `42` dos veces.

{% include nav.html %}