---
title: Begin primero
---

{% include menu.html %}

## Problema

Un phaser `BEGIN` es más que un bloque que se ejecuta temprano — también es una *expresión* cuyo valor se calcula una vez, en tiempo de compilación, y luego queda congelado en el programa.

Usa `BEGIN { 2 + 3 }` para inicializar una variable `$compiled`, e imprímela. La operación `2 + 3` se evalúa mientras el programa aún se está compilando, pero el valor almacenado es perfectamente utilizable en tiempo de ejecución.

## Ejemplo

El programa imprime:

```
5
```

## Solución

✅ [Ve la solución](solution)

{% include nav.html %}
