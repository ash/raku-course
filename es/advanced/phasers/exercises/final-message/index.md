---
title: Mensaje final
---

{% include menu.html %}

## Problema

Un phaser `END` se ejecuta después del código principal, por lo que ve el estado *final* de tus variables — lo que lo hace ideal para un resumen.

Declara un contador `$count` con valor `0`, y escribe un phaser `END` (colócalo antes del código principal) que imprima `processed $count items`. Luego, en el cuerpo principal, incrementa el contador tres veces con un bucle. El resumen debe reportar el conteo final, no el valor en el momento en que se escribió el phaser.

## Ejemplo

El programa imprime:

```
processed 3 items
```

## Solución

✅ [Ve la solución](solution)

{% include nav.html %}
