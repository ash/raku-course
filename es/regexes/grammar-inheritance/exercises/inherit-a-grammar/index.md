---
title: Herede una gramática
translations_gpt:
---

{% include menu.html %}

## Problema

Escribe una gramática base `Animal` cuyo `TOP` empareje un token `sound` (cualquier palabra). Después escribe dos gramáticas que hereden de ella: `Dog`, que sobrescriba `sound` para emparejar `woof`, y `Cat`, que lo sobrescriba para emparejar `meow`. Analiza `'woof'` con `Dog`, `'meow'` con `Cat` y — para mostrar que cada una conserva su propio sonido — también `'meow'` con `Dog`. Imprime si cada análisis funcionó.

## Ejemplo

El programa imprime:

```
True
True
False
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
