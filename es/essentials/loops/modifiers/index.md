---
title: while y until como modificadores de declaraciones
---

{% include menu.html %}

Tanto `while` como `until` pueden usarse en forma de modificadores de declaraciones ([de manera similar](/es/essentials/conditional-checks/modifiers) a `if` y `unless`).

Considera un ejemplo que emula la división de módulo:

```raku
my $x = 10;
$x -= 3 while $x > 2;
say $x; # 1
```

Aquí, `-=` es el operador que combina tanto la resta como la asignación. En este caso, `$x -= 3` es equivalente a `$x = $x - 3`.

El modificador `while` permite que la declaración `$x -= 3` se repita mientras la condición `$x > 2` siga siendo `True`. Tan pronto como se vuelva `False`, el bucle se detiene.

Observa que si la condición es `False` inicialmente, la declaración no se ejecuta en absoluto.

El mismo programa se puede reescribir con `until`. Para esto, la condición debe invertirse:

```raku
my $x = 10;
$x -= 3 until $x <= 2;
say $x; # 1
```

{% include nav.html %}