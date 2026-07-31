---
title: Tipado o sin tipar
translations_gpt:
---

{% include menu.html %}

## Problema

Declara dos variables escalares una al lado de la otra: una sin tipo `$untyped` y una con tipo `Int` `$typed`. Vuelca ambas con `dd` mientras aun están vacías, luego asigna `42` a cada una y vuelca ambas de nuevo. Observa detenidamente como `dd` describe los dos contenedores de manera diferente.

## Ejemplo

El programa imprime (en la salida de error estándar):

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Solución

✅ [Ve la solución](solution)

{% include nav.html %}
