---
title: Entrar en un bloque
---

{% include menu.html %}

## Problema

A diferencia de `FIRST`, que se ejecuta solo una vez, un phaser `ENTER` se dispara *cada vez* que se entra al bloque, y el cuerpo de un bucle se entra de nuevo en cada iteración.

Recorre `1..2`. Dentro del bucle, coloca un phaser `ENTER` que imprima `--entering`, y una sentencia ordinaria que imprima `body` con el número actual. Observa que `--entering` aparece una vez por iteración.

## Ejemplo

El programa imprime:

```
--entering
body 1
--entering
body 2
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
