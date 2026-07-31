---
title: La estrella Whatever
---

{% include menu.html %}

Es posible que hayas visto el `*` usado en expresiones como `* * 2` o `* %% 2` al llamar a `map` y `grep`. Ese `*` es la _estrella Whatever_, y la expresión que lo rodea construye una pequeña función de un argumento sobre la marcha. Esta sección explica que es realmente, como se relaciona con un bloque y donde la estrella sola significa simplemente "lo que quieras".

## Una estrella crea una función

Cuando `*` aparece en una expresión, Raku convierte toda la expresión en una función — un `WhateverCode` — en la que la estrella representa el argumento:

```raku
my $double = * * 2;

say $double.^name; # WhateverCode
say $double(21);   # 42
```

`* * 2` es una función que multiplica su único argumento por dos. Por eso `(1..5).map(* * 2)` funciona: a `map` se le pasa exactamente esa función de un argumento.

## Whatever versus un bloque

Una expresión Whatever es una forma más corta de escribir una función que también podrías escribir como un bloque. Estas tres son equivalentes:

```raku
* * 2
{ $_ * 2 }
-> $x { $x * 2 }
```

La forma Whatever no nombra ningún parámetro; la forma de bloque usa la variable topica `$_`; la forma puntiaguda nombra `$x`. Esa última, `-> $x { ... }`, es una pequeña función por derecho propio — la conocerás apropiadamente en [Subrutinas anonimas](/es/advanced/anonymous-subroutines); aquí basta con leerla como una tercera forma de escribir la misma función de un argumento. Para una expresión simple, la estrella es la más compacta, por eso es tan común con `map`, `grep` y `sort`:

```raku
say (1..5).map(* * 2);            # (2 4 6 8 10)
say (1..5).map({ $_ * 2 });       # (2 4 6 8 10)
say (1..5).map(-> $x { $x * 2 }); # (2 4 6 8 10)
```

Usa un **bloque** cuando la lógica necesite más de una expresión, o cuando un parámetro con nombre claro ayude. Usa la **estrella** cuando una expresión corta lo diga todo.

## Más de una estrella

Cada `*` en la expresión es un argumento separado, en orden. Así que dos estrellas crean una función de **dos** argumentos:

```raku
my $add = * + *;

say $add(3, 4); # 7
```

Aquí `* + *` es una función de dos argumentos que suma sus argumentos — por ejemplo un total acumulado y el siguiente elemento.

## La estrella Whatever sola

Por si sola, `*` significa "lo que sea" — tanto como haya, o sin limite. Dos usos cotidianos:

```raku
my @a = 10, 20, 30;
say @a[*-1];        # 30  — * es la longitud del arreglo, asi que *-1 es el ultimo indice

say (1..*).head(3); # (1 2 3)  — 1..* es un rango abierto
```

En `@a[*-1]` la estrella representa el numero de elementos, y en `1..*` representa "sin limite superior". Ya sea que construya una función o signifique "lo que quieras", la estrella es una de las abreviaturas más útiles de Raku.

{% include nav.html %}
