---
title: Espere un fallo
translations_gpt:
---

{% include menu.html %}

## Problema

Cuando el bloque de una promesa lanza una excepción, `await` la relanza en el punto del `await`. Arranca una promesa cuyo bloque haga `die 'boom'`. Espérala dentro de un bloque `try` con un fáser `CATCH` que imprima `caught: <mensaje>`.

## Ejemplo

El programa imprime:

```
caught: boom
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
