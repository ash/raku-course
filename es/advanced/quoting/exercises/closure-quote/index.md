---
title: Un closure en una cadena q
---

{% include menu.html %}

## Problema

Parte de la forma no interpolante `q` y activa solo el adverbio de closure. Dada una variable `$x` con valor `10`, imprime una línea que contenga el cálculo incrustado `{$x ** 2}` *y* un `$x` literal, sin interpolar. Esto demuestra que el adverbio de closure evalúa el código entre llaves mientras deja intactas las variables `$` simples.

## Ejemplo

El programa imprime:

```
$x squared is 100
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
