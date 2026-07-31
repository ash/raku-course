---
title: Semáforos
translations_gpt:
---

{% include menu.html %}

## Problema

Define un enum `Light` con las constantes `red`, `amber` y `green` (en ese orden). Declara una variable con el tipo del enum, `my Light $current`, y asígnale `red`. Imprime la luz junto con el número que hay detrás, en la forma `red is 0`.

Luego **cambia la luz un par de veces** — reasigna `$current` a `amber` y después a `green`, imprimiendo de la misma manera después de cada cambio — de modo que recorras `red` → `amber` → `green`.

Podrías esperar que `$current++` avance a la siguiente luz por sí solo — pruébalo y observa qué sucede.

## Ejemplo

El programa imprime:

```
red is 0
amber is 1
green is 2
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
