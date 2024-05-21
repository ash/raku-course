---
title: Quiz — Funciones con valores predeterminados
---

{% include menu.html %}

Hay una función:

```raku
sub add(Int $x, Int $y) returns Int {
    $x + $y
}
```

Verifica cuáles de las siguientes asignaciones funcionarán.

{:.quiz}
1 | my $a = add(4, 6); | Asignar a una variable sin tipo funciona.
0 | my Rat $b = add(5, 6); | Un valor `Int` no se puede asignar a una variable de tipo `Rat`.
1 | my Int $c = add(7, 8);
0 | my Num $d = add(9, 10);
1 | my Str $e = add(9, 10).Str; | La conversión explícita de tipo ayuda.
0 | my Str $f = add(9, 10);

{% include quiz.html %}

{% include nav.html %}