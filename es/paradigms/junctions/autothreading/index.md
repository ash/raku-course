---
title: Autohilado
translations_gpt:
---

{% include menu.html %}

Cuando pasas una unión a algo que espera un solo valor — una comparación o una función corriente —, Raku aplica calladamente esa operación a **todos** los valores que hay detrás de la unión y vuelve a juntar los resultados en una unión. Esto se llama _autoenhebrado_.

Por ejemplo, sumar a una unión suma a cada uno de sus valores:

```raku
my $j = 1 | 2 | 3;
say $j + 10; # any(11, 12, 13)
```

El `+ 10` se aplicó a `1`, `2` y `3` por separado, dando una nueva unión _any_ `any(11, 12, 13)`.

Con una comparación, el resultado combinado se contrae a un único valor de verdad según la clase de la unión:

```raku
say so all(3, 7, 2) > 0;  # True  — every value is positive
say so all(3, -1, 2) > 0; # False — not all are positive
say so none(1, 2, 3) == 5; # True — none of them is 5
```

El autoenhebrado es lo que hace tan concisas a las uniones: una sola comparación revisa muchos valores. Conceptualmente las comprobaciones son independientes, así que Raku es libre de ejecutarlas en paralelo, y por eso las uniones encajan de forma natural en el juego de herramientas de concurrencia.

{% include nav.html %}
