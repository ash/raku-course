---
title: El operador de secuencia
translations_gpt:
---

{% include menu.html %}

El operador de secuencia `...` construye una lista a partir de un patrón inicial hasta un valor final. Dale los primeros elementos y el punto final, y deduce cómo continúa la serie:

```raku
say (2, 4 ... 10); # (2 4 6 8 10)
```

De `2, 4` infiere «suma dos cada vez», y continúa hasta llegar a `10`. El paso también puede ir hacia abajo:

```raku
say (10, 8 ... 2); # (10 8 6 4 2)
```

Si los elementos crecen multiplicándose en lugar de sumándose, el operador también se da cuenta:

```raku
say (1, 2, 4 ... 64); # (1 2 4 8 16 32 64)
```

Aquí cada término es el doble del anterior, así que la secuencia es geométrica.

Cuando la regla es más compleja de lo que el operador puede adivinar, puedes darla explícitamente como una clausura de los elementos anteriores. Por ejemplo, una regla explícita de «suma el paso»:

```raku
say (1, * + 2 ... 9); # (1 3 5 7 9)
```

El bloque `* + 2` dice cómo obtener el elemento siguiente a partir del actual. Con esto, `...` puede expresar cualquier secuencia que sepas describir mediante una regla.

{% include nav.html %}
