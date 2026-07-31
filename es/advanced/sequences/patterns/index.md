---
title: Patrones de secuencias
translations_gpt:
---

{% include menu.html %}

El operador `...` reconoce más que solo pasos aritméticos.

Si le das tres valores que crecen por multiplicación, continúa con una secuencia _geométrica_:

```raku
say 1, 2, 4 ... 64; # (1 2 4 8 16 32 64)
```

Aquí cada valor es el doble del anterior, así que la secuencia se duplica hasta alcanzar `64`.

Las secuencias no se limitan a números. Con cadenas, Raku sigue el orden alfabético natural:

```raku
say 'a' ... 'e'; # (a b c d e)
```

Una secuencia también puede contar hacia abajo. Cuando el punto final es menor que el inicio, los valores decrecen:

```raku
say 10 ... 1; # (10 9 8 7 6 5 4 3 2 1)
```

En cada caso describes el patrón con ejemplos, y el operador `...` completa el resto.

{% include nav.html %}
