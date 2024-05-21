---
title: Parámetros tipados de funciones
---

{% include menu.html %}

Los parámetros de función en Raku pueden tener restricciones de tipo. Esto es muy similar a las [variables tipadas](/es/essentials/typed-variables/type-constraints/).

```raku
sub add(Int $x, Int $y) { $x + $y }
```

La función ahora exige que sus argumentos sean números enteros.

```raku
say add(10, 20);
# say add(pi, e); # Error
```

Un intento de pasar un parámetro de cualquier otro tipo que no sea `Int` resulta en un error de compilación.

```
$ raku t.raku
===SORRY!=== Error while compiling t.raku
Calling add(Num, Num) will never work with declared signature (Int $x, Int $y)
at t.raku:5
------> say ⏏add(pi, e);
```

Nótese que Raku no convertirá automáticamente los tipos, incluso si es posible en otros casos.

```raku
# say add('3', '4'); # Error
say '3' + '4'; # OK y es 7
```

%%tipblock
## Cómo saber si es un error de compilación
Si el mensaje de error comienza con `===SORRY!=== Error while compiling`, significa que el error ocurrió en tiempo de compilación.
%%/tipblock

{% include nav.html %}