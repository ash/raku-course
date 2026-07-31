---
title: Sobrescribir la dinámica
translations_gpt: true
---

{% include menu.html %}

## Problema

Muestra cómo una variable dinámica fluye a través de una rutina intermedia que no sabe nada sobre ella.

Escribe una subrutina `log-it($msg)` que imprima el mensaje precedido por una variable dinámica `$*prefix`. Escribe una segunda subrutina `task` que simplemente llame a `log-it('working')` — y nunca mencione `$*prefix`. Luego llama a `task` dos veces, cada vez desde dentro de un bloque que establece `$*prefix` con un valor diferente (`INFO`, luego `DEBUG`).

## Ejemplo

El programa imprime:

```
INFO: working
DEBUG: working
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
