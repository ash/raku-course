---
title: Construir junctions
translations_gpt:
---

{% include menu.html %}

La manera más sencilla de construir una unión es con los operadores de unión. El operador `|` crea una unión _any_:

```raku
my $j = 1 | 2 | 3;
say $j; # any(1, 2, 3)
```

El valor `$j` representa «1 o 2 o 3». Hay cuatro clases de unión, cada una con un operador y una función correspondiente:

* `any( … )` o `a | b` — verdadera si coincide **cualquier** valor
* `all( … )` o `a & b` — verdadera si coinciden **todos** los valores
* `one( … )` o `a ^ b` — verdadera si coincide **exactamente un** valor
* `none( … )` — verdadera si **no** coincide ningún valor (es la única clase sin forma de operador: usa la función)

Las formas de función resultan cómodas con una lista:

```raku
say all(3, 7, 2);  # all(3, 7, 2)
say none(1, 2, 3); # none(1, 2, 3)
```

Una unión es más útil dentro de una comparación. Preguntar si un número es igual a una unión _any_ lo compara con todos los valores a la vez:

```raku
say so 2 == any(1, 2, 3); # True
say so 5 == any(1, 2, 3); # False
```

La forma de operador se lee igual de bien: `1 | 2 | 3` es exactamente la misma unión _any_:

```raku
say so 2 == 1 | 2 | 3; # True
say so 5 == 1 | 2 | 3; # False
```

El `so` convierte el resultado de la unión en un booleano corriente. El tema siguiente examina lo que ocurre entre bastidores cuando haces esto.

{% include nav.html %}
