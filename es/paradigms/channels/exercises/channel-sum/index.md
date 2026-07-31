---
title: Sume un canal
translations_gpt:
---

{% include menu.html %}

## Problema

Crea un canal y muévelo con **dos promesas**. En un bloque `start` — el productor — envía al canal los números `1..6` y ciérralo después. En un segundo bloque `start` — el consumidor — recoge todos los valores con `.list` y devuelve su suma. **Espera ambas** promesas juntas e imprime la suma que produjo el consumidor. Esta es la forma natural de un canal: un productor en un hilo, un consumidor en otro, coordinados desde un tercero.

## Ejemplo

El programa imprime:

```
21
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
