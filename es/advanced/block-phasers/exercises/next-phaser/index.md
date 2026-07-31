---
title: Después de cada paso
---

{% include menu.html %}

## Problema

El phaser `NEXT` se ejecuta al *final* de cada iteración del bucle, lo cual es un buen momento para reportar el progreso.

Mantén un total acumulado en `$sum`, comenzando en `0`. Recorre `1..3`; en cada pasada, primero suma el número actual a `$sum`. Usa un phaser `NEXT` para imprimir `sum so far: $sum` después de cada iteración.

Ten en cuenta el orden: el phaser `NEXT` se ejecuta después del cuerpo, por lo que reporta el total *incluyendo* el número actual.

## Ejemplo

El programa imprime:

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
