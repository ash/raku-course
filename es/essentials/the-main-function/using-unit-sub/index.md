---
title: Uso de unit sub
---

{% include menu.html %}

¡La construcción `unit sub` es una forma práctica de hacer que el resto del archivo sea el cuerpo de la función! Cuando se usa con `MAIN`, permite deshacerse de las llaves que abarcan prácticamente todo el archivo, así como de la indentación innecesaria.

El uso de `unit sub` se demuestra en el siguiente ejemplo de un programa.

```raku
unit sub MAIN($a, $b);

my $sum = $a + $b;
say "La suma de $a y $b es $sum.";
```

La función `MAIN` es la única función en este archivo. Si este es también el caso de tu programa, considera usar `unit sub MAIN` como se muestra arriba.

{% include nav.html %}