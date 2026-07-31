---
title: Suma de dígitos
translations_gpt:
---

{% include menu.html %}

## Problema

Escribe una subrutina recursiva `sum-digits` que devuelva la suma de los dígitos decimales de un entero no negativo. Para un número menor que `10` la respuesta es el propio número; en caso contrario suma el último dígito (`$n % 10`) a la suma de dígitos del resto (`$n div 10`).

Imprime `sum-digits(1234)`.

## Ejemplo

El programa imprime:

```
10
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
