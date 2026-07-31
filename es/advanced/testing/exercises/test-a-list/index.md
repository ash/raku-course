---
title: Planificar dos verificaciones
translations_gpt: true
---

{% include menu.html %}

## Problema

Escribe un archivo de pruebas que use `plan` (no `done-testing`) para indicar de antemano que contiene exactamente dos comprobaciones. Haz que esas comprobaciones sean:

1. Con `is-deeply`, que ordenar la lista `3, 1, 2` da `[1, 2, 3]`.
1. Con `is`, que `10 % 3` es igual a `1`.

Dale a cada comprobación una breve descripción de tu elección.

## Ejemplo

Con las descripciones `sorted` y `remainder`, el programa imprime:

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
