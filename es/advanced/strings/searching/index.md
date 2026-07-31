---
title: Búsqueda en cadenas
---

{% include menu.html %}

Varios métodos responden preguntas sobre lo que contiene una cadena.

El método `contains` indica si una cadena aparece en cualquier parte dentro de otra:

```raku
say 'Raku'.contains('ak'); # True
say 'Raku'.contains('xy'); # False
```

Los métodos `starts-with` y `ends-with` comprueban el inicio y el final de una cadena:

```raku
say 'Raku'.starts-with('Ra'); # True
say 'Raku'.ends-with('ku');   # True
```

Cuando necesitas la posición exacta de una subcadena, usa `index`. Devuelve el índice de la primera coincidencia, contando desde cero:

```raku
say 'Raku'.index('k'); # 2
```

Si la subcadena no se encuentra, `index` devuelve `Nil` en lugar de un número:

```raku
say 'Raku'.index('z'); # Nil
```

{% include nav.html %}
