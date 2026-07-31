---
title: Empareje el tipo
translations_gpt:
---

{% include menu.html %}

## Problema

Los errores incorporados tienen sus propios tipos de excepción, que puedes emparejar. Escribe un bloque que calcule `1 / 0` e intente usar el resultado, lo que lanza una `X::Numeric::DivideByZero`. En el phaser `CATCH` del bloque, usa `when X::Numeric::DivideByZero` para emparejar ese tipo concreto e imprime `cannot divide by zero`.

## Ejemplo

El programa imprime:

```
cannot divide by zero
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
