---
title: Un map con dos puntos
---

{% include menu.html %}

## Problema

Aquí hay una expresión que duplica los números del `1` al `10` y luego conserva solo aquellos mayores que `10`:

```raku
(1..10).map(* * 2).grep(* > 10).say;
```

Reescribela de modo que la llamada al método `grep` use la forma con dos puntos en lugar de paréntesis. Deja el resto de la cadena sin cambios. Recuerda que la forma con dos puntos consume el resto de la sentencia, así que solo la última llamada en una cadena puede usarla.

## Ejemplo

El programa imprime:

```
(12 14 16 18 20)
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
