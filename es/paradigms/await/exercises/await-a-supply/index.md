---
title: Espere un supply
translations_gpt:
---

{% include menu.html %}

## Problema

`await` acepta algo más que promesas: también se puede esperar un supply, y entonces el programa espera hasta que el flujo está **terminado** y recibe de vuelta su **último** valor. Construye un supply de lecturas de sensor a partir de `18, 21, 19, 23`, espéralo e imprime la lectura final con la forma que se muestra abajo. Sin `tap` y sin bloque `react`: un solo `await` hace la espera.

## Ejemplo

El programa imprime:

```
final reading: 23
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
