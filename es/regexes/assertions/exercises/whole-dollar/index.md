---
title: Entre corchetes
translations_gpt:
---

{% include menu.html %}

## Problema

Combina un lookbehind y un lookahead para emparejar un importe en **dólares enteros**: los dígitos que vienen justo después de un `$` y a los que **no** les sigue un punto decimal. Así que `$50` coincide (`50`), pero `$3.99` no, porque tiene céntimos.

Usa un lookbehind positivo para `$` y un lookahead negativo para `.`, y añade un límite de palabra `>>` tras los dígitos para que se empareje el número entero. Imprime la coincidencia para `'$50'`.

## Ejemplo

El programa imprime:

```
｢50｣
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
