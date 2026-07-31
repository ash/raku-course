---
title: Nombre el error
translations_gpt:
---

{% include menu.html %}

## Problema

Escribe una subrutina `risky` que haga `die 'sub failed'`. Después llámala desde dentro de un bloque que tenga un phaser `CATCH`. El `CATCH` debe imprimir el nombre del tipo de la excepción (con `.^name`) y después su mensaje (con `.message`). Esto muestra que `CATCH` maneja las excepciones lanzadas por el código al que el bloque *llama*, y no solo por un `die` escrito directamente en el bloque.

## Ejemplo

El programa imprime:

```
X::AdHoc
sub failed
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
