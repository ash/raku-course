---
title: Limpiar al salir
---

{% include menu.html %}

## Problema

La verdadera fortaleza de `LEAVE` es que se ejecuta *sin importar cómo* se salga del bloque, incluyendo un `return` anticipado.

Escribe una subrutina `work` cuyo cuerpo comience con un phaser `LEAVE` que imprima `Cleanup`. Luego, aún dentro de la subrutina, imprime `Working`, haz un `return` inmediato, y coloca una línea `say 'never reached'` después del `return`. Llama a la subrutina. El `return` anticipado omite esa última línea, pero `Cleanup` se sigue imprimiendo.

## Ejemplo

El programa imprime:

```
Working
Cleanup
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
