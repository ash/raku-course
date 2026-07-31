---
title: Clasificar el tamaño
translations_gpt:
---

{% include menu.html %}

## Problema

Escribe tres multi-subrutinas llamadas `size`, todas tomando un `Int`, que devuelvan `'small'`, `'medium'` o `'large'`. Clasifica por la *magnitud* del número, ignorando su signo: los números cuyo valor absoluto es menor que `10` son pequeños, menor que `100` son medianos, y cualquier otro es grande. Usa una cláusula `where` en los dos primeros candidatos y deja que el tercero sea el comodín.

Imprime el resultado de `size(7)`, `size(30)` y `size(-250)`.

## Ejemplo

El programa imprime:

```
small
medium
large
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
