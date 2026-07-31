---
title: Maneje y continúe
translations_gpt:
---

{% include menu.html %}

## Problema

Recorre los tres elementos `ok`, `bad` y `ok`. Para cada uno ejecuta un bloque que imprima `processed <elemento>`, pero que haga `die 'boom'` cuando el elemento sea `bad`. Pon un phaser `CATCH` dentro del bloque para que un elemento fallido se informe como `skipped (<elemento>): <mensaje>` y el bucle siga con el elemento siguiente en lugar de detenerse.

## Ejemplo

El programa imprime:

```
processed ok
skipped (bad): boom
processed ok
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
