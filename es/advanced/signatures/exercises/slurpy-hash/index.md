---
title: Argumentos nominales slurpy
---

{% include menu.html %}

## Problema

Escribe una subrutina `describe` que tome un nombre posicional obligatorio y luego recolecte cualquier cantidad de argumentos nombrados en un hash slurpy (`*%opts`). Debe devolver una cadena de la forma `name: key=value, key=value, ...`, listando cada opción con sus claves en orden alfabético.

Llámala como `describe('Anna', colour => 'red', size => 5)` e imprime el resultado.

## Ejemplo

El programa imprime:

```
Anna: colour=red, size=5
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
