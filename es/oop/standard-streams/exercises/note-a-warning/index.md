---
title: 'Un aviso con `note`'
translations_gpt:
---

{% include menu.html %}

## Problema

Un programa procesa un valor que resulta ser negativo. Usa `note` para mandar un aviso al error estándar cuando el valor sea menor que cero, y `say` para mandar el resultado real — su valor absoluto — a la salida estándar. Usa el valor `-3`.

## Ejemplo

En la pantalla aparecen ambas líneas:

```
Warning: the value is negative
3
```

Si se descarta el error estándar, solo queda el resultado:

```
$ raku note-a-warning.raku 2>/dev/null
3
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
