---
title: Búsqueda o no encontrado
translations_gpt:
---

{% include menu.html %}

## Problema

Escribe una subrutina `lookup` que devuelva `100` cuando su argumento sea `'a'`, y que en caso contrario llame a `fail` con el mensaje `no such key`.

Llama a `lookup('z')` e imprime su resultado si está definido. Si no lo está, imprime `not found` y, en una segunda línea, el motivo del fallo tomado del propio `Failure` (`reason: <mensaje>`).

## Ejemplo

El programa imprime:

```
not found
reason: no such key
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
