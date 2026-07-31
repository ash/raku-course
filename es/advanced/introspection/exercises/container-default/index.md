---
title: El valor predeterminado del contenedor
---

{% include menu.html %}

## Problema

Un contenedor puede llevar un valor por defecto, establecido con el trait `is default`. Hasta que asignes algo, al leer la variable obtienes ese valor por defecto, y `.VAR.default` lo reporta.

Declara un escalar `$count` con un valor por defecto de `0`. Sin asignarle nada, imprime la variable en sí, y luego imprime el valor por defecto de su contenedor. Ambas líneas deberían mostrar `0`.

## Ejemplo

El programa imprime:

```
0
0
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
