---
title: Una variable our
translations_gpt:
---

{% include menu.html %}

## Problema

Solo `our` hace que un nombre sea visible fuera de su paquete; `my` lo mantiene privado. Crea un paquete `Config` con una variable `our` llamada `$port` con valor `8080` **y** una variable `my` llamada `$secret` con valor `42`. Desde afuera, imprime `$Config::port`, y luego imprime si `$Config::secret` está definida — no debería estarlo, porque una variable `my` no forma parte del espacio de nombres.

## Ejemplo

El programa imprime:

```
8080
False
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
