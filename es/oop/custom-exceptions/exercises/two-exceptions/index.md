---
title: Dos tipos de excepción
translations_gpt:
---

{% include menu.html %}

## Problema

Define dos clases de excepción personalizadas, `TooSmall` y `TooBig`, cada una heredando de `Exception`, con métodos `message` que devuelvan `too small` y `too big` respectivamente.

Recorre los dos tipos y, para cada uno, lanza una excepción de ese tipo dentro de su propio bloque. Usa un phaser `CATCH` con una rama `when` para cada tipo, imprimiendo `small` para `TooSmall` y `big` para `TooBig`. Así verás usadas ambas ramas.

## Ejemplo

El programa imprime:

```
small
big
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
