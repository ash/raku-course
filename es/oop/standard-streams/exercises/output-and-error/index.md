---
title: Salida y error
translations_gpt:
---

{% include menu.html %}

## Problema

Un programa suma en un bucle la lista de números `3, 5, 7`. En cada vuelta manda el total acumulado al error estándar como mensaje de progreso, y después del bucle manda el resultado final a la salida estándar, usando directamente los manejadores de los flujos.

Esta separación importa: el resultado se puede capturar o encauzar hacia otro programa, mientras que los mensajes de progreso se quedan aparte, en el error estándar.

## Ejemplo

Al ejecutar el programa aparecen en la pantalla los dos flujos: primero los totales acumulados y después el resultado final:

```
running total: 3
running total: 8
running total: 15
15
```

Pero si descartas el error estándar, solo queda el resultado real:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
