---
title: 'Solution: ¿Cuántos dígitos?'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
say (2 ** 1000).chars;
```

🦋 Encuentra el programa en el archivo [big-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/big-factorial.raku).

## Salida

```
302
```

## Comentarios

1. `2 ** 1000` se calcula de forma exacta: Raku no lo redondea ni desborda, porque los enteros tienen precisión arbitraria.

1. `chars` es normalmente un método de cadenas, pero al llamarlo sobre un entero, primero convierte el número en su texto decimal y luego cuenta los caracteres. Como aquí no hay ni signo negativo ni punto decimal, ese conteo de caracteres es exactamente el número de dígitos: `302`.

{% include nav.html %}
