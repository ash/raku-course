---
title: Operaciones de conjuntos
---

{% include menu.html %}

Los sets se pueden combinar con las operaciones habituales de la teoría de conjuntos. Cada operador tiene un símbolo Unicode y una forma ASCII; puedes usar la que prefieras.

La _unión_ `∪` (o `(|)`) reúne todos los valores que están en cualquiera de los dos sets:

```raku
say (set(1, 2, 3) ∪ set(3, 4, 5)).elems; # 5
```

Los dos sets comparten el valor `3`, así que la unión tiene cinco elementos distintos: `1, 2, 3, 4, 5`.

La _intersección_ `∩` (o `(&)`) conserva solo los valores que están en ambos sets:

```raku
my $common = set(1, 2, 3) ∩ set(2, 3, 4);
say $common;       # Set(2 3) — note that sets are unordered
say $common.elems; # 2
say 2 ∈ $common;   # True
```

Aquí la intersección contiene `2` y `3` — los valores presentes en ambos sets. Un set no tiene un orden inherente, por lo que los dos elementos pueden aparecer en cualquier orden al imprimirse.

El resultado de estas operaciones es a su vez un set, así que puedes hacerle las mismas preguntas: cuántos elementos tiene y si un valor particular pertenece a él.

{% include nav.html %}
