---
title: Haga una fecha legible
translations_gpt:
---

{% include menu.html %}

## Problema

Escribe una gramática que analice una fecha ISO como `'2026-07-05'` en tres tokens: `year`, `month` y `day`. Escribe una **clase de acciones** en la que el método de cada token produzca con `make` un valor: `year` y `day` producen su número como entero, mientras que `month` produce el **nombre del mes en inglés** (`1` → `January`, …, `12` → `December`). El método `TOP` lee después esos tres valores con `.made` y produce una cadena legible como `'5 July 2026'`. Analiza `'2026-07-05'` con la clase de acciones e imprime `.made`.

## Ejemplo

El programa imprime:

```
5 July 2026
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
