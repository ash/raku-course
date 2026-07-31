---
title: Un número con proto
translations_gpt:
---

{% include menu.html %}

## Problema

Escribe una gramática que analice un `number`, que puede ser o bien un entero decimal (uno o más dígitos) o bien un literal hexadecimal (`0x` seguido de dígitos hexadecimales `0`–`9`, `a`–`f`). Usa un **proto token** con dos variantes `:sym<…>`, `dec` y `hex`. Analiza `'0xff'` e imprime si funcionó.

## Ejemplo

El programa imprime:

```
True
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
