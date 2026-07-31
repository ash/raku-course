---
title: Un parámetro modificable
translations_gpt:
---

{% include menu.html %}

## Problema

Por defecto, los parámetros de una subrutina son de solo lectura, por lo que una rutina no puede cambiar la variable del llamador. El trait `is rw` elimina esa restricción.

Escribe una subrutina `double` cuyo único parámetro esté marcado con `is rw`, y que lo duplique en su lugar (`$n *= 2`). Llámala sobre una variable que contenga `21`, luego imprime la variable para mostrar que se ha convertido en `42`.

## Ejemplo

El programa imprime:

```
42
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
