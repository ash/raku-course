---
title: Volcar la estructura de datos
---

{% include menu.html %}

## Problema

Se te da la siguiente estructura de datos anidada:

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');
```

Haz dos cosas con ella:

1. Imprime un volcado orientado al desarrollador de `@data` usando `dd`.
2. Imprime la misma representación como cadena, precedida por el texto `Structure: `.

## Ejemplo

El programa imprime dos líneas similares:

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Solución

✅ [Ve la solución](solution)

{% include nav.html %}
