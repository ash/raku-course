---
title: Un array nativo
---

{% include menu.html %}

## Problema

El uso natural de un tipo nativo con tamaño es un array compacto de bytes. Declara un array `uint8` con los valores `100`, `200` y `255` — cada uno cabe en un solo byte — e imprime la suma de sus elementos.

Ten en cuenta que los elementos se mantienen dentro de `0..255`, pero su suma no tiene por qué: `.sum` devuelve un `Int` ordinario.

## Ejemplo

El programa imprime:

```
555
```

## Solución

✅ [Ve la solución](solution)

{% include nav.html %}
