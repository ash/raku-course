---
title: Informe y recupérese
translations_gpt:
---

{% include menu.html %}

## Problema

Muestra cómo `CATCH` permite que un programa se recupere y siga adelante con un valor por defecto razonable.

Declara una variable `$timeout` con el valor por defecto `30` antes de un bloque. Dentro del bloque haz `die 'config missing'` y después (en una línea que nunca se alcanzará) intenta poner `$timeout` a `60`. Usa un phaser `CATCH` cuyo bloque `default` imprima `warning: <mensaje>; keeping default`. Después del bloque imprime `timeout is <timeout> seconds`.

## Ejemplo

El programa imprime:

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
