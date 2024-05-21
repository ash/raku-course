---
title: Verificaciones condicionales con if
---

{% include menu.html %}

La verificación condicional `if` prueba una condición y si es `True`, ejecuta un bloque de código.

```raku
if 10 > 4 {
    say '¡Las matemáticas funcionan!';
}
```

Observa que no necesitas poner la condición entre paréntesis (pero puedes hacerlo si lo deseas).

Por supuesto, las variables son más que bienvenidas en las pruebas:

```raku
my $flag = False;
if $flag {
    # . . . hacer algo
}
```

En el caso de que más de una verificación use la misma variable, es posible usar comparaciones encadenadas:

```raku
my $x = 42;
if 40 < $x < 45 {
    say "Se ha dado la respuesta correcta $x.";
}
```

Si la condición no se cumple, el bloque de código asociado no se ejecuta y el flujo del programa continúa.

```raku
say 'Inicio';
if False {
    say 'Esto nunca se imprime.';
}
say 'Fin';
```

Este programa solo imprime `Inicio` y `Fin`.

{% include nav.html %}