---
title: Crear un alias de un array
translations_gpt:
---

{% include menu.html %}

## Problema

Se te da un array:

```raku
my @original = 10, 20, 30;
```

Crea un segundo nombre, `@alias`, que se refiera al _mismo_ array (no lo copies). Esta vez, agrega (`push`) un nuevo elemento a `@original`, y luego imprime `@alias` para mostrar que el alias ve no solo cambios de valor sino también cambios estructurales.

## Ejemplo

El programa imprime:

```
[10 20 30 40]
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
